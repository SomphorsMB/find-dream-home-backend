import { Injectable } from '@nestjs/common';
import { CreatePropertyCommentDto } from './dto/create-property-comment.dto';
import { UpdatePropertyCommentDto } from './dto/update-property-comment.dto';
import { PropertyComment } from './entities/property-comment.entity';
import { PropertyCommentRepository } from './property-comment.repository';

@Injectable()
export class PropertyCommentService {
  constructor(private readonly _propertyCommentRepository: PropertyCommentRepository){}

  create(createPropertyCommentDto: CreatePropertyCommentDto) {
    // return this._propertyCommentRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._propertyCommentRepository.create(createPropertyCommentDto)
  }

  async findAll() {
    const categories = await this._propertyCommentRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._propertyCommentRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updatePropertyCommentDto: UpdatePropertyCommentDto) {
    return this._propertyCommentRepository.createQueryBuilder()
          .update(new UpdatePropertyCommentDto)
          .set({...updatePropertyCommentDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._propertyCommentRepository.createQueryBuilder()
          .delete()
          .from(PropertyComment)
          .where('id=:id',{id:id})
          .execute();
  }
}
