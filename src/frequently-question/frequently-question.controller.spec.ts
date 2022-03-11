import { Test, TestingModule } from '@nestjs/testing';
import { FrequentlyQuestionController } from './frequently-question.controller';
import { FrequentlyQuestionService } from './frequently-question.service';

describe('FrequentlyQuestionController', () => {
  let controller: FrequentlyQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrequentlyQuestionController],
      providers: [FrequentlyQuestionService],
    }).compile();

    controller = module.get<FrequentlyQuestionController>(FrequentlyQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
