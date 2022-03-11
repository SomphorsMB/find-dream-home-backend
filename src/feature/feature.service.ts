import { Injectable } from '@nestjs/common';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { Feature } from './entities/feature.entity';
import { FeatureRepository } from './feature.repository';

@Injectable()
export class FeatureService {
  constructor(private readonly _featureRepository:FeatureRepository){}

  create(createFeatureDto: CreateFeatureDto) {
    // return this._featureRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._featureRepository.create(createFeatureDto)
  }

  async findAll() {
    const categories = await this._featureRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._featureRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updateFeatureDto: UpdateFeatureDto) {
    return this._featureRepository.createQueryBuilder()
          .update(new UpdateFeatureDto)
          .set({...updateFeatureDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._featureRepository.createQueryBuilder()
          .delete()
          .from(Feature)
          .where('id=:id',{id:id})
          .execute();
  }
}
