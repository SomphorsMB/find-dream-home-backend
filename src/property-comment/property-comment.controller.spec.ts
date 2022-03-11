import { Test, TestingModule } from '@nestjs/testing';
import { PropertyCommentController } from './property-comment.controller';
import { PropertyCommentService } from './property-comment.service';

describe('PropertyCommentController', () => {
  let controller: PropertyCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyCommentController],
      providers: [PropertyCommentService],
    }).compile();

    controller = module.get<PropertyCommentController>(PropertyCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
