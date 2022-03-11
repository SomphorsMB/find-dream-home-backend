import { Test, TestingModule } from '@nestjs/testing';
import { PropertyDetailService } from './property-detail.service';

describe('PropertyDetailService', () => {
  let service: PropertyDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyDetailService],
    }).compile();

    service = module.get<PropertyDetailService>(PropertyDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
