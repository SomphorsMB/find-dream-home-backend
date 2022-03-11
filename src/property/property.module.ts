import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { PropertyRepository } from './property.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Property, PropertyRepository])],
  controllers: [PropertyController],
  providers: [PropertyService]
})
export class PropertyModule {}
