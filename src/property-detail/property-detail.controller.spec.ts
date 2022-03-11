import { Test, TestingModule } from '@nestjs/testing';
import { PropertyDetailController } from './property-detail.controller';
import { PropertyDetailService } from './property-detail.service';

describe('PropertyDetailController', () => {
  let controller: PropertyDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyDetailController],
      providers: [PropertyDetailService],
    }).compile();

    controller = module.get<PropertyDetailController>(PropertyDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
