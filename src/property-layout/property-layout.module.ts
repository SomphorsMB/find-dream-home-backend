import { Module } from '@nestjs/common';
import { PropertyLayoutService } from './property-layout.service';
import { PropertyLayoutController } from './proerty-layout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyLayout } from './entities/property-layout.entity';
import { PropertyLayoutRepository } from './property-layout.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyLayout, PropertyLayoutRepository])],
  controllers: [PropertyLayoutController],
  providers: [PropertyLayoutService]
})
export class PropertyLayoutModule {}
