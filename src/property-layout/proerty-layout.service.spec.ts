import { Test, TestingModule } from '@nestjs/testing';
import { ProertyLayoutService } from './property-layout.service';

describe('ProertyLayoutService', () => {
  let service: ProertyLayoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProertyLayoutService],
    }).compile();

    service = module.get<ProertyLayoutService>(ProertyLayoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
