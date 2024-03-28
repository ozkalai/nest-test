import { Controller, Post, Body } from '@nestjs/common';
import { TextSummarizationService } from './text-summarization.service';

@Controller('text-summarization')
export class TextSummarizationController {
  constructor(
    private readonly textSummarizationService: TextSummarizationService,
  ) {}

  @Post('summarize')
  async summarizeText(@Body() body: { text: string }): Promise<string> {
    const { text } = body;
    return this.textSummarizationService.summarizeText(text);
  }
}
