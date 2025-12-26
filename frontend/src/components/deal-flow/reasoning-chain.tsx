"use client"

import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ReasoningStep {
    step: number;
    type: string;
    content: string;
    toolCalls?: Array<{
        name: string;
        args: any;
        id: string;
    }>;
    timestamp?: string;
}

interface PreviousRun {
    id: string;
    timestamp: string;
    borrowerName: string;
    systemPrompt: string;
    reasoningChain: ReasoningStep[];
    results: any[];
}

interface ReasoningChainProps {
    chain: ReasoningStep[];
    previousRuns?: PreviousRun[];
    onLoadRun?: (run: PreviousRun) => void;
}

export function ReasoningChain({ chain, previousRuns = [], onLoadRun }: ReasoningChainProps) {
    const [expandedSteps, setExpandedSteps] = React.useState<Set<number>>(new Set())
    const [isDebugOpen, setIsDebugOpen] = React.useState(false)

    const toggleStep = (stepNumber: number) => {
        setExpandedSteps(prev => {
            const next = new Set(prev)
            if (next.has(stepNumber)) {
                next.delete(stepNumber)
            } else {
                next.add(stepNumber)
            }
            return next
        })
    }

    const isExpanded = (stepNumber: number) => expandedSteps.has(stepNumber)

    const getLineCount = (text: string) => {
        // Count both explicit newlines and approximate line breaks based on content length
        const explicitLines = text.split('\n').length
        // Estimate additional lines from long text (roughly 80 chars per line for small text)
        const estimatedLines = Math.ceil(text.length / 80)
        return Math.max(explicitLines, estimatedLines)
    }

    const truncateToLines = (text: string, maxLines: number = 2) => {
        const lines = text.split('\n')
        if (lines.length <= maxLines) {
            // If explicit lines are less, check if content is long enough to wrap
            if (text.length < 160) return text // Roughly 2 lines of 80 chars
        }
        return lines.slice(0, maxLines).join('\n') + (lines.length > maxLines ? '...' : '')
    }

    if (!chain || chain.length === 0) {
        return (
            <div className="flex h-full items-center justify-center p-8 text-center text-muted-foreground">
                Run a match to see the agent's reasoning chain.
            </div>
        )
    }

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'SystemMessage':
                return 'bg-blue-50 border-blue-200 text-blue-900';
            case 'HumanMessage':
                return 'bg-purple-50 border-purple-200 text-purple-900';
            case 'AIMessage':
                return 'bg-green-50 border-green-200 text-green-900';
            case 'ToolMessage':
                return 'bg-orange-50 border-orange-200 text-orange-900';
            default:
                return 'bg-gray-50 border-gray-200 text-gray-900';
        }
    }

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'SystemMessage':
                return 'System';
            case 'HumanMessage':
                return 'User';
            case 'AIMessage':
                return 'Agent';
            case 'ToolMessage':
                return 'Tool';
            default:
                return type;
        }
    }

    return (
        <div className="h-full flex flex-col overflow-hidden">
            <div className="px-4 py-2 border-b flex items-center justify-between bg-muted/20 flex-shrink-0">
                <h3 className="font-semibold text-sm">Reasoning Chain ({chain.length})</h3>
            </div>
            <ScrollArea className={cn("flex-1 min-h-0", isDebugOpen && "flex-[0_0_60%]")}>
                <div className="pl-4 pr-8 py-4 pb-6 space-y-0">
                    {chain.map((step, idx) => {
                        const isLast = idx === chain.length - 1
                        return (
                            <div key={idx} className="relative min-w-0">
                                {/* Step Box */}
                                <div className={`border rounded-md ${getTypeColor(step.type)} overflow-hidden`}>
                                    <div className="p-3 min-w-0">
                                        <div className="flex items-center justify-between mb-2 min-w-0">
                                            <div className="flex items-center gap-2 min-w-0 flex-shrink">
                                                <Badge variant="outline" className="text-xs font-medium border-current/30 bg-transparent flex-shrink-0">
                                                    {getTypeLabel(step.type)}
                                                </Badge>
                                                <span className="text-xs text-muted-foreground flex-shrink-0">
                                                    Step {step.step}
                                                </span>
                                            </div>
                                            {step.timestamp && (
                                                <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                                                    {new Date(step.timestamp).toLocaleTimeString()}
                                                </span>
                                            )}
                                        </div>
                                        
                                        {step.toolCalls && step.toolCalls.length > 0 && (
                                            <div className="mb-2 space-y-1.5">
                                                {step.toolCalls.map((tc, tcIdx) => (
                                                    <div key={tcIdx} className="bg-black/5 p-2 rounded border border-black/10 text-xs font-mono min-w-0 overflow-hidden">
                                                        <div className="font-semibold mb-1 text-primary break-words">{tc.name}</div>
                                                        {tc.args && (
                                                            <div className="text-muted-foreground text-[10px] whitespace-pre-wrap break-words min-w-0">
                                                                {typeof tc.args === 'object' ? JSON.stringify(tc.args, null, 1) : tc.args}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        
                                        <div className="text-xs leading-relaxed">
                                            {step.type === 'AIMessage' && step.toolCalls ? (
                                                <span className="text-muted-foreground italic">
                                                    Agent reasoning before tool calls...
                                                </span>
                                            ) : step.type === 'ToolMessage' && step.content.includes('{') ? (
                                                <div className="space-y-1">
                                                    <div className="font-mono text-[10px] bg-muted/30 p-2 rounded border overflow-x-auto break-words min-w-0">
                                                        {isExpanded(step.step) ? (
                                                            step.content
                                                        ) : (
                                                            step.content.length > 300 ? `${step.content.substring(0, 300)}...` : step.content
                                                        )}
                                                    </div>
                                                    {step.content.length > 300 && (
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-6 text-[10px] px-2 -ml-2"
                                                            onClick={() => toggleStep(step.step)}
                                                        >
                                                            {isExpanded(step.step) ? (
                                                                <>Show Less <ChevronUp className="h-3 w-3 ml-1" /></>
                                                            ) : (
                                                                <>Show More <ChevronDown className="h-3 w-3 ml-1" /></>
                                                            )}
                                                        </Button>
                                                    )}
                                                </div>
                                            ) : step.content.includes('**') || step.content.includes('Explanation:') ? (
                                                <div className="space-y-1">
                                                    <div className={`whitespace-pre-wrap break-words ${!isExpanded(step.step) ? 'line-clamp-2' : ''}`}>
                                                        {isExpanded(step.step) ? (
                                                            step.content.split('\n').map((line, lineIdx) => {
                                                                if (line.startsWith('**') && line.endsWith('**')) {
                                                                    return <div key={lineIdx} className="font-semibold text-primary mt-2">{line.replace(/\*\*/g, '')}</div>
                                                                }
                                                                if (line.includes('Explanation:')) {
                                                                    const parts = line.split('Explanation:')
                                                                    return (
                                                                        <div key={lineIdx}>
                                                                            {parts[0]}<span className="font-medium">Explanation:</span>{parts[1]}
                                                                        </div>
                                                                    )
                                                                }
                                                                return <div key={lineIdx}>{line}</div>
                                                            })
                                                        ) : (
                                                            truncateToLines(step.content, 2).split('\n').map((line, lineIdx) => {
                                                                if (line.startsWith('**') && line.endsWith('**')) {
                                                                    return <div key={lineIdx} className="font-semibold text-primary mt-2">{line.replace(/\*\*/g, '')}</div>
                                                                }
                                                                if (line.includes('Explanation:')) {
                                                                    const parts = line.split('Explanation:')
                                                                    return (
                                                                        <div key={lineIdx}>
                                                                            {parts[0]}<span className="font-medium">Explanation:</span>{parts[1]}
                                                                        </div>
                                                                    )
                                                                }
                                                                return <div key={lineIdx}>{line}</div>
                                                            })
                                                        )}
                                                    </div>
                                                    {getLineCount(step.content) > 2 && (
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-6 text-[10px] px-2 -ml-2"
                                                            onClick={() => toggleStep(step.step)}
                                                        >
                                                            {isExpanded(step.step) ? (
                                                                <>Show Less <ChevronUp className="h-3 w-3 ml-1" /></>
                                                            ) : (
                                                                <>Show More <ChevronDown className="h-3 w-3 ml-1" /></>
                                                            )}
                                                        </Button>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="space-y-1">
                                                    <div className={`whitespace-pre-wrap break-words ${!isExpanded(step.step) ? 'line-clamp-2' : ''}`}>
                                                        {isExpanded(step.step) ? step.content : truncateToLines(step.content, 2)}
                                                    </div>
                                                    {getLineCount(step.content) > 2 && (
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-6 text-[10px] px-2 -ml-2"
                                                            onClick={() => toggleStep(step.step)}
                                                        >
                                                            {isExpanded(step.step) ? (
                                                                <>Show Less <ChevronUp className="h-3 w-3 ml-1" /></>
                                                            ) : (
                                                                <>Show More <ChevronDown className="h-3 w-3 ml-1" /></>
                                                            )}
                                                        </Button>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Connecting Line */}
                                {!isLast && (
                                    <div className="flex justify-center py-1">
                                        <div className="w-px h-4 bg-border"></div>
                                        <ChevronDown className="h-4 w-4 text-muted-foreground -mt-1" />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </ScrollArea>
            
            {/* Previous Runs Debug Drawer */}
            {previousRuns.length > 0 && (
                <div className={cn(
                    "border-t bg-muted/10 transition-all duration-200",
                    isDebugOpen ? "flex-1 min-h-0 flex flex-col" : "flex-shrink-0"
                )}>
                    <button
                        onClick={() => setIsDebugOpen(!isDebugOpen)}
                        className="w-full px-4 py-2 flex items-center justify-between hover:bg-muted/20 transition-colors text-sm font-medium"
                    >
                        <span>Previous Matching Runs ({previousRuns.length})</span>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", isDebugOpen && "rotate-180")} />
                    </button>
                    {isDebugOpen && (
                        <ScrollArea className="flex-1 min-h-0">
                            <div className="p-4 space-y-3">
                                {previousRuns.map((run) => (
                                    <div key={run.id} className="border rounded-md p-3 bg-background space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-medium text-sm">{run.borrowerName}</div>
                                                <div className="text-xs text-muted-foreground">
                                                    {new Date(run.timestamp).toLocaleString()}
                                                </div>
                                            </div>
                                            {onLoadRun && (
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="h-7 text-xs"
                                                    onClick={() => onLoadRun(run)}
                                                >
                                                    Load
                                                </Button>
                                            )}
                                        </div>
                                        <div className="space-y-1.5 text-xs">
                                            <div>
                                                <span className="text-muted-foreground">System Prompt:</span>
                                                <div className="mt-1 p-2 bg-muted/30 rounded border font-mono text-[10px] line-clamp-2">
                                                    {run.systemPrompt.substring(0, 200)}...
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-muted-foreground">Reasoning Steps:</span>
                                                <span className="ml-1 font-medium">{run.reasoningChain.length}</span>
                                            </div>
                                            <div>
                                                <span className="text-muted-foreground">Results:</span>
                                                <span className="ml-1 font-medium">{run.results.length} lenders</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    )}
                </div>
            )}
        </div>
    )
}
