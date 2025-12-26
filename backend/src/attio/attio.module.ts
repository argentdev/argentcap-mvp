import { Module } from '@nestjs/common';
import { AttioService } from './attio.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule],
    providers: [AttioService],
    exports: [AttioService],
})
export class AttioModule { }
