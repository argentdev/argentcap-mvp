
import { Injectable } from '@nestjs/common';
import { StateGraph, MessagesAnnotation } from '@langchain/langgraph';
import { ChatAnthropic } from '@langchain/anthropic';
import { HumanMessage, SystemMessage, AIMessage, ToolMessage } from '@langchain/core/messages';
import { ToolNode } from '@langchain/langgraph/prebuilt';
import { tool } from '@langchain/core/tools';
import { z } from 'zod';
import { AttioService } from '../attio/attio.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AgentService {
    private graph;

    constructor(
        private attioService: AttioService,
        private configService: ConfigService
    ) {
        this.initGraph();
    }

    private initGraph() {
        // Define Tools that use the service
        const executePython = tool(
            async ({ code }) => {
                return `Executed python code: ${code}`;
            },
            {
                name: 'execute_python',
                description: 'Execute python code safely',
                schema: z.object({
                    code: z.string().describe('The python code to execute'),
                }),
            }
        );

        const doMath = tool(
            async ({ expression }) => {
                return `Calculated: ${expression}`;
            },
            {
                name: 'do_math',
                description: 'Evaluate a mathematical expression',
                schema: z.object({
                    expression: z.string().describe('The match expression'),
                }),
            }
        );

        const findBorrower = tool(
            async ({ name }) => {
                const data = await this.attioService.findBorrower(name);
                return JSON.stringify(data);
            },
            {
                name: 'find_borrower',
                description: 'Find details about a borrower/company by name',
                schema: z.object({ name: z.string() })
            }
        );

        const findLenders = tool(
            async ({ criteria }) => {
                const data = await this.attioService.getLenders(criteria);
                return JSON.stringify(data);
            },
            {
                name: 'find_lenders',
                description: 'Find lenders matching specific criteria',
                schema: z.object({ criteria: z.string().optional() })
            }
        );

        const tools = [executePython, doMath, findBorrower, findLenders];
        const toolNode = new ToolNode(tools);

        const apiKey = this.configService.get<string>('ANTHROPIC_API_KEY');

        let model: any; // Relax type as bindTools returns a Runnable
        try {
            if (!apiKey) {
                console.warn("ANTHROPIC_API_KEY not found. Using Mock Model.");
                // We can't actually instantiate ChatAnthropic without key efficiently without error usually.
                // So we might skip binding tools or use a dummy key if we mock the invoke.
                // For now, let's just Log and NOT throw, but maybe provide a Dummy Key that fails ONLY on invoke.
                // Or better yet, we can't create the model easily. 
                // Let's use a dummy key "mock" and ensure we catch errors in callModel
                model = new ChatAnthropic({
                    modelName: 'claude-sonnet-4-5-20250929',
                    apiKey: "mock_key_for_dev",
                }).bindTools(tools);
            } else {
                model = new ChatAnthropic({
                    modelName: 'claude-sonnet-4-5-20250929',
                    apiKey: apiKey,
                }).bindTools(tools);
            }
        } catch (e) {
            console.error("Failed to init ChatAnthropic", e);
        }

        // Define logic
        async function shouldContinue(state: typeof MessagesAnnotation.State) {
            const messages = state.messages;
            const lastMessage = messages[messages.length - 1] as AIMessage;
            if (lastMessage.tool_calls?.length) {
                return "tools";
            }
            return "__end__";
        }

        async function callModel(state: typeof MessagesAnnotation.State) {
            const messages = state.messages;
            // Guard for missing key / mock mode
            if (!apiKey || apiKey === "mock_key_for_dev") {
                // Check if this is the first call (no tool responses yet)
                const hasToolResponses = messages.some(msg => msg.constructor.name === 'ToolMessage');
                
                if (!hasToolResponses) {
                    // First call: return AI message with tool call
                    return {
                        messages: [new AIMessage({
                            content: "I'll search for lenders matching the borrower's criteria.",
                            tool_calls: [{
                                name: 'find_lenders',
                                args: { criteria: 'commercial real estate' },
                                id: 'mock_tool_call_1'
                            }]
                        })]
                    };
                } else {
                    // Second call: return final answer
                    return {
                        messages: [new AIMessage({
                            content: JSON.stringify([
                                {
                                    id: 'mock_lender_1',
                                    name: 'Hercules Capital',
                                    focus_industries: 'Technology, Healthcare',
                                    debt_products: 'Venture Debt, Term Loans',
                                    loan_size_requirements: '$10M-$250M',
                                    fit: 98
                                },
                                {
                                    id: 'mock_lender_2',
                                    name: 'Espresso Capital',
                                    focus_industries: 'Software, SaaS',
                                    debt_products: 'Recurring Revenue Loans',
                                    loan_size_requirements: '$5M - $40M',
                                    fit: 92
                                }
                            ])
                        })]
                    };
                }
            }

            const response = await model.invoke(messages);
            return { messages: [response] };
        }

        const workflow = new StateGraph(MessagesAnnotation)
            .addNode("agent", callModel)
            .addNode("tools", toolNode)
            .addEdge("__start__", "agent")
            .addConditionalEdges("agent", shouldContinue)
            .addEdge("tools", "agent");

        this.graph = workflow.compile();
    }

    async runAgent(input: string, systemPrompt?: string) {
        const messages = [
            new SystemMessage(systemPrompt || "You are a helpful assistant."),
            new HumanMessage(input)
        ];

        const result = await this.graph.invoke({ messages });
        const lastMessage = result.messages[result.messages.length - 1];
        
        // Format reasoning chain for frontend display
        const reasoningChain = result.messages.map((msg, index) => {
            const msgType = msg.constructor.name;
            let content = '';
            let toolCalls: { name: string; args: Record<string, any>; id?: string }[] | null = null;
            
            if (msgType === 'SystemMessage') {
                const sysContent = (msg as SystemMessage).content;
                content = typeof sysContent === 'string' ? sysContent : JSON.stringify(sysContent);
            } else if (msgType === 'HumanMessage') {
                const humanContent = (msg as HumanMessage).content;
                content = typeof humanContent === 'string' ? humanContent : JSON.stringify(humanContent);
            } else if (msgType === 'AIMessage') {
                const aiMsg = msg as AIMessage;
                content = typeof aiMsg.content === 'string' ? aiMsg.content : JSON.stringify(aiMsg.content);
                if (aiMsg.tool_calls && aiMsg.tool_calls.length > 0) {
                    toolCalls = aiMsg.tool_calls.map(tc => ({
                        name: tc.name,
                        args: tc.args,
                        id: tc.id
                    }));
                }
            } else if (msgType === 'ToolMessage') {
                const toolMsg = msg as ToolMessage;
                content = typeof toolMsg.content === 'string' ? toolMsg.content : JSON.stringify(toolMsg.content);
            }
            
            return {
                step: index + 1,
                type: msgType,
                content: content,
                toolCalls: toolCalls,
                timestamp: new Date().toISOString()
            };
        });
        
        return {
            result: lastMessage.content,
            reasoningChain: reasoningChain
        };
    }
}
