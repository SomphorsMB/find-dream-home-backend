import { Module } from '@nestjs/common';
import { AmenityService } from './amenity.service';
import { AmenityController } from './amenity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amenity } from './entities/amenity.entity';
import { AmenityRepository } from './amenity.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Amenity, AmenityRepository])],
  controllers: [AmenityController],
  providers: [AmenityService]
})
export class AmenityModule {}
