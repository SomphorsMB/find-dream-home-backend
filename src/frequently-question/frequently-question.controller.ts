import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrequentlyQuestionService } from './frequently-question.service';
import { CreateFrequentlyQuestionDto } from './dto/create-frequently-question.dto';
import { UpdateFrequentlyQuestionDto } from './dto/update-frequently-question.dto';

@Controller('frequently-question')
export class FrequentlyQuestionController {
  constructor(private readonly frequentlyQuestionService: FrequentlyQuestionService) {}

  @Post()
  create(@Body() createFrequentlyQuestionDto: CreateFrequentlyQuestionDto) {
    return this.frequentlyQuestionService.create(createFrequentlyQuestionDto);
  }

  @Get()
  findAll() {
    return this.frequentlyQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frequentlyQuestionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrequentlyQuestionDto: UpdateFrequentlyQuestionDto) {
    return this.frequentlyQuestionService.update(+id, updateFrequentlyQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frequentlyQuestionService.remove(+id);
  }
}
