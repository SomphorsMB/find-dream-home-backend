import { Injectable } from '@nestjs/common';
import { CreatePropertyTypeDto } from './dto/create-property-type.dto';
import { UpdatePropertyTypeDto } from './dto/update-property-type.dto';
import { PropertyType } from './entities/property-type.entity';
import { PropertyTypeRepository } from './property-type.repository';

@Injectable()
export class PropertyTypeService {
  constructor(private readonly _propertyTypeRepository:PropertyTypeRepository){}

  create(createPropertyTypeDto: CreatePropertyTypeDto) {
    // return this._propertyTypeRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._propertyTypeRepository.create(createPropertyTypeDto)
  }

  async findAll() {
    const categories = await this._propertyTypeRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._propertyTypeRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updatePropertyTypeDto: UpdatePropertyTypeDto) {
    return this._propertyTypeRepository.createQueryBuilder()
          .update(new UpdatePropertyTypeDto)
          .set({...updatePropertyTypeDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._propertyTypeRepository.createQueryBuilder()
          .delete()
          .from(PropertyType)
          .where('id=:id',{id:id})
          .execute();
  }
}
