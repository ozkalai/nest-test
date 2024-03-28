import { Module } from '@nestjs/common';
import { TextSummarizationController } from './text-summarization.controller';
import { TextSummarizationService } from './text-summarization.service';

@Module({
  controllers: [TextSummarizationController],
  providers: [TextSummarizationService],
})
export class TextSummarizationModule {}
