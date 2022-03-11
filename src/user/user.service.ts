import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository){}

  create(createUserDto: CreateUserDto) {
    // return this._userRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._userRepository.create(createUserDto)
  }

  async findAll() {
    const categories = await this._userRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._userRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this._userRepository.createQueryBuilder()
          .update(new UpdateUserDto)
          .set({...updateUserDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._userRepository.createQueryBuilder()
          .delete()
          .from(User)
          .where('id=:id',{id:id})
          .execute();
  }
}
