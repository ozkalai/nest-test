import { Test, TestingModule } from '@nestjs/testing';
import { TextSummarizationService } from './text-summarization.service';

describe('TextSummarizationService', () => {
  let service: TextSummarizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextSummarizationService],
    }).compile();

    service = module.get<TextSummarizationService>(TextSummarizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
