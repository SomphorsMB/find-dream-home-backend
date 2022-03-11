import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { PropertyRepository } from './property.repository';

@Injectable()
export class PropertyService {
  constructor(private readonly _propertyRepository:PropertyRepository){}

  create(createPropertyDto: CreatePropertyDto) {
    console.log(createPropertyDto)
    // return this._propertyRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._propertyRepository.create(createPropertyDto)
  }

  async findAll() {
    const categories = await this._propertyRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._propertyRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this._propertyRepository.createQueryBuilder()
          .update(new UpdatePropertyDto)
          .set({...updatePropertyDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._propertyRepository.createQueryBuilder()
          .delete()
          .from(Property)
          .where('id=:id',{id:id})
          .execute();
  }
}
