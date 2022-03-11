import { Module } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { FeatureController } from './feature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feature } from './entities/feature.entity';
import { FeatureRepository } from './feature.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Feature, FeatureRepository])],
  controllers: [FeatureController],
  providers: [FeatureService]
})
export class FeatureModule {}
