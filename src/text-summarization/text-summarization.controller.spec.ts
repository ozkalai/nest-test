import { Test, TestingModule } from '@nestjs/testing';
import { TextSummarizationController } from './text-summarization.controller';
import { TextSummarizationService } from './text-summarization.service';

describe('TextSummarizationController', () => {
  let controller: TextSummarizationController;
  let service: TextSummarizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextSummarizationController],
      providers: [TextSummarizationService],
    }).compile();

    controller = module.get<TextSummarizationController>(
      TextSummarizationController,
    );
    service = module.get<TextSummarizationService>(TextSummarizationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('summarizeText', () => {
    it('should call summarizeText method of TextSummarizationService and return the result', async () => {
      const text = 'This is a test text.';
      const expectedResult = 'This is a summarized text.';

      jest.spyOn(service, 'summarizeText').mockResolvedValue(expectedResult);

      const result = await controller.summarizeText({ text });

      expect(result).toBe(expectedResult);
      expect(service.summarizeText).toHaveBeenCalledWith(text);
    });
  });
});
