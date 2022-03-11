import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly _categoryRepository:CategoryRepository){}

  create(createCategoryDto: CreateCategoryDto) {
    console.log(createCategoryDto)
    // return this._categoryRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._categoryRepository.create(createCategoryDto)
  }

  async findAll() {
    const categories = await this._categoryRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._categoryRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this._categoryRepository.createQueryBuilder()
          .update(new UpdateCategoryDto)
          .set({...updateCategoryDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._categoryRepository.createQueryBuilder()
          .delete()
          .from(Category)
          .where('id=:id',{id:id})
          .execute();
  }
}
