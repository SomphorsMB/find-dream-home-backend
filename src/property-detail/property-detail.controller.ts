import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyDetailService } from './property-detail.service';
import { CreatePropertyDetailDto } from './dto/create-property-detail.dto';
import { UpdatePropertyDetailDto } from './dto/update-property-detail.dto';

@Controller('property-detail')
export class PropertyDetailController {
  constructor(private readonly propertyDetailService: PropertyDetailService) {}

  @Post()
  create(@Body() createPropertyDetailDto: CreatePropertyDetailDto) {
    return this.propertyDetailService.create(createPropertyDetailDto);
  }

  @Get()
  findAll() {
    return this.propertyDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyDetailDto: UpdatePropertyDetailDto) {
    return this.propertyDetailService.update(+id, updatePropertyDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyDetailService.remove(+id);
  }
}
