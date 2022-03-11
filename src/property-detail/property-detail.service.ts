import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { CreatePropertyDetailDto } from './dto/create-property-detail.dto';
import { UpdatePropertyDetailDto } from './dto/update-property-detail.dto';
import { PropertyDetail } from './entities/property-detail.entity';
import { PropertyDetailRepository } from './property-detail.repository';

@Injectable()
export class PropertyDetailService {
  constructor(private readonly _propertyDetailRepository:PropertyDetailRepository){}

  create(createPropertyDetailDto: CreatePropertyDetailDto) {
    console.log(createPropertyDetailDto)
    // return this._propertyDetailRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._propertyDetailRepository.create(createPropertyDetailDto)
  }

  async findAll() {
    const categories = await this._propertyDetailRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._propertyDetailRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updatePropertyDetailDto: UpdatePropertyDetailDto) {
    return this._propertyDetailRepository.createQueryBuilder()
          .update(new UpdatePropertyDetailDto)
          .set({...updatePropertyDetailDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._propertyDetailRepository.createQueryBuilder()
          .delete()
          .from(PropertyDetail)
          .where('id=:id',{id:id})
          .execute();
  }
}
