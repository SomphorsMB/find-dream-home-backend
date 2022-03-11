import { Module } from '@nestjs/common';
import { PropertyDetailService } from './property-detail.service';
import { PropertyDetailController } from './property-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyDetail } from './entities/property-detail.entity';
import { PropertyDetailRepository } from './property-detail.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyDetail, PropertyDetailRepository])],
  controllers: [PropertyDetailController],
  providers: [PropertyDetailService]
})
export class PropertyDetailModule {}
