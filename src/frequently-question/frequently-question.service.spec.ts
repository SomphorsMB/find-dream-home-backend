import { Test, TestingModule } from '@nestjs/testing';
import { FrequentlyQuestionService } from './frequently-question.service';

describe('FrequentlyQuestionService', () => {
  let service: FrequentlyQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrequentlyQuestionService],
    }).compile();

    service = module.get<FrequentlyQuestionService>(FrequentlyQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
