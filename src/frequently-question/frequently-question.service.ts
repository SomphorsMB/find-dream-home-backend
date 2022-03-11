import { Injectable } from '@nestjs/common';
import { CreateFrequentlyQuestionDto } from './dto/create-frequently-question.dto';
import { UpdateFrequentlyQuestionDto } from './dto/update-frequently-question.dto';
import { FrequentlyQuestion } from './entities/frequently-question.entity';
import { FrequentlyQuestionRepository } from './frequently-question.repository';

@Injectable()
export class FrequentlyQuestionService {
  constructor(private readonly _frequentlyQuestionRepository:FrequentlyQuestionRepository){}

  create(createFrequentlyQuestionDto: CreateFrequentlyQuestionDto) {
    // return this._frequentlyQuestionRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._frequentlyQuestionRepository.create(createFrequentlyQuestionDto)
  }

  async findAll() {
    const categories = await this._frequentlyQuestionRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._frequentlyQuestionRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updateFrequentlyQuestionDto: UpdateFrequentlyQuestionDto) {
    return this._frequentlyQuestionRepository.createQueryBuilder()
          .update(new UpdateFrequentlyQuestionDto)
          .set({...updateFrequentlyQuestionDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._frequentlyQuestionRepository.createQueryBuilder()
          .delete()
          .from(FrequentlyQuestion)
          .where('id=:id',{id:id})
          .execute();
  }
}
