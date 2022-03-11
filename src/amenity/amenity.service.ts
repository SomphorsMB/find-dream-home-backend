import { Injectable } from '@nestjs/common';
import { AmenityRepository } from './amenity.repository';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { UpdateAmenityDto } from './dto/update-amenity.dto';
import { Amenity } from './entities/amenity.entity';

@Injectable()
export class AmenityService {
  constructor(private readonly _amenityRepository:AmenityRepository){}

  create(createAmenityDto: CreateAmenityDto) {
    // return this._amenityRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._amenityRepository.create(createAmenityDto)
  }

  async findAll() {
    const categories = await this._amenityRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._amenityRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updateAmenityDto: UpdateAmenityDto) {
    return this._amenityRepository.createQueryBuilder()
          .update(new UpdateAmenityDto)
          .set({...updateAmenityDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._amenityRepository.createQueryBuilder()
          .delete()
          .from(Amenity)
          .where('id=:id',{id:id})
          .execute();
  }
}
