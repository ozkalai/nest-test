import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TextSummarizationModule } from './text-summarization/text-summarization.module';

@Module({
  imports: [ConfigModule.forRoot(), TextSummarizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
