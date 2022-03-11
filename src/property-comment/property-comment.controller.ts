import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyCommentService } from './property-comment.service';
import { CreatePropertyCommentDto } from './dto/create-property-comment.dto';
import { UpdatePropertyCommentDto } from './dto/update-property-comment.dto';

@Controller('property-comment')
export class PropertyCommentController {
  constructor(private readonly propertyCommentService: PropertyCommentService) {}

  @Post()
  create(@Body() createPropertyCommentDto: CreatePropertyCommentDto) {
    return this.propertyCommentService.create(createPropertyCommentDto);
  }

  @Get()
  findAll() {
    return this.propertyCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyCommentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyCommentDto: UpdatePropertyCommentDto) {
    return this.propertyCommentService.update(+id, updatePropertyCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyCommentService.remove(+id);
  }
}
