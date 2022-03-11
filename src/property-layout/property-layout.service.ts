import { Injectable } from '@nestjs/common';
import { CreatePropertyLayoutDto } from './dto/create-property-layout.dto';
import { UpdatePropertyLayoutDto } from './dto/update-proerty-layout.dto';
import { PropertyLayout } from './entities/property-layout.entity';
import { PropertyLayoutRepository } from './property-layout.repository';

@Injectable()
export class PropertyLayoutService {
  constructor(private readonly _propertyLayoutRepository:PropertyLayoutRepository){}

  create(createProertyLayoutDto: CreatePropertyLayoutDto) {
    // return this._propertyLayoutRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._propertyLayoutRepository.create(createProertyLayoutDto)
  }

  async findAll() {
    const categories = await this._propertyLayoutRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._propertyLayoutRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updateProertyLayoutDto: UpdatePropertyLayoutDto) {
    return this._propertyLayoutRepository.createQueryBuilder()
          .update(new UpdatePropertyLayoutDto)
          .set({...updateProertyLayoutDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._propertyLayoutRepository.createQueryBuilder()
          .delete()
          .from(PropertyLayout)
          .where('id=:id',{id:id})
          .execute();
  }
}
