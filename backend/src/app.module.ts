import { Module } from '@nestjs/common';
import { AgentModule } from './agent/agent.module';
// import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AgentModule], // DatabaseModule
  controllers: [],
  providers: [],
})
export class AppModule { }
