import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { ServiceRepository } from './service.repository';

@Injectable()
export class ServiceService {
  constructor(private readonly _serviceRepository: ServiceRepository){}

  create(createServiceDto: CreateServiceDto) {
    // return this._serviceRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._serviceRepository.create(createServiceDto)
  }

  async findAll() {
    const categories = await this._serviceRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._serviceRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return this._serviceRepository.createQueryBuilder()
          .update(new UpdateServiceDto)
          .set({...updateServiceDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._serviceRepository.createQueryBuilder()
          .delete()
          .from(Service)
          .where('id=:id',{id:id})
          .execute();
  }
}
