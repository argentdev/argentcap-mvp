import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { AttioModule } from '../attio/attio.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [AttioModule, ConfigModule],
    controllers: [AgentController],
    providers: [AgentService],
})
export class AgentModule { }
