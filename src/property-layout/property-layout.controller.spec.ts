import { Test, TestingModule } from '@nestjs/testing';
import { PropertyLayoutController } from './proerty-layout.controller';
import { PropertyLayoutService } from './property-layout.service';

describe('ProertyLayoutController', () => {
  let controller: PropertyLayoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyLayoutController],
      providers: [PropertyLayoutService],
    }).compile();

    controller = module.get<PropertyLayoutController>(PropertyLayoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
