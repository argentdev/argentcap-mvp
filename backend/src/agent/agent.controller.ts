import { Controller, Post, Body } from '@nestjs/common';
import { AgentService } from './agent.service';

@Controller('agent')
export class AgentController {
    constructor(private readonly agentService: AgentService) { }

    @Post('run')
    async run(@Body() body: { input: string; systemPrompt?: string }) {
        const response = await this.agentService.runAgent(body.input, body.systemPrompt);
        return response;
    }
}
