import { Controller, Post, Body } from '@nestjs/common';
import { TextSummarizationService } from './text-summarization.service';
import { TextDto } from './dtos/text-dto';

@Controller('text-summarization')
export class TextSummarizationController {
  constructor(
    private readonly textSummarizationService: TextSummarizationService,
  ) {}

  @Post()
  async create(@Body() textDto: TextDto) {
    const { text } = textDto;
    return await this.textSummarizationService.summarizeText(text);
  }
}
