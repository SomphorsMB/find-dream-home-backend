import { Module } from '@nestjs/common';
import { PropertyTypeService } from './property-type.service';
import { PropertyTypeController } from './property-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyType } from './entities/property-type.entity';
import { PropertyTypeRepository } from './property-type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyType, PropertyTypeRepository])],
  controllers: [PropertyTypeController],
  providers: [PropertyTypeService]
})
export class PropertyTypeModule {}
