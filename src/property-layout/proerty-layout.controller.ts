import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyLayoutService } from './property-layout.service';
import { CreatePropertyLayoutDto } from './dto/create-property-layout.dto';
import { UpdatePropertyLayoutDto } from './dto/update-proerty-layout.dto';

@Controller('property-layout')
export class PropertyLayoutController {
  constructor(private readonly propertyLayoutService: PropertyLayoutService) {}

  @Post()
  create(@Body() createProertyLayoutDto: CreatePropertyLayoutDto) {
    return this.propertyLayoutService.create(createProertyLayoutDto);
  }

  @Get()
  findAll() {
    return this.propertyLayoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyLayoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProertyLayoutDto: UpdatePropertyLayoutDto) {
    return this.propertyLayoutService.update(+id, updateProertyLayoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyLayoutService.remove(+id);
  }
}
