import { Injectable } from '@nestjs/common';
import { CreatePostCommentDto } from './dto/create-post-comment.dto';
import { UpdatePostCommentDto } from './dto/update-post-comment.dto';
import { PostComment } from './entities/post-comment.entity';
import { PostCommentRepository } from './post-comment.repository';

@Injectable()
export class PostCommentService {
  constructor(private readonly _postCommentRepository: PostCommentRepository){}

  create(createPostCommentDto: CreatePostCommentDto) {
    // return this._postCommentRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._postCommentRepository.create(createPostCommentDto)
  }

  async findAll() {
    const categories = await this._postCommentRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._postCommentRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updatePostCommentDto: UpdatePostCommentDto) {
    return this._postCommentRepository.createQueryBuilder()
          .update(new UpdatePostCommentDto)
          .set({...updatePostCommentDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._postCommentRepository.createQueryBuilder()
          .delete()
          .from(PostComment)
          .where('id=:id',{id:id})
          .execute();
  }
}
