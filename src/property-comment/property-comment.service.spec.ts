import { Test, TestingModule } from '@nestjs/testing';
import { PropertyCommentService } from './property-comment.service';

describe('PropertyCommentService', () => {
  let service: PropertyCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyCommentService],
    }).compile();

    service = module.get<PropertyCommentService>(PropertyCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
