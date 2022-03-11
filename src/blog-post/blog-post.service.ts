import { Injectable } from '@nestjs/common';
import { BlogPostRepository } from './blog-post.repository';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';
import { BlogPost } from './entities/blog-post.entity';

@Injectable()
export class BlogPostService {
  constructor(private readonly _blogPostRepository: BlogPostRepository){}

  create(createBlogPostDto: CreateBlogPostDto) {
    // return this._blogPostRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._blogPostRepository.create(createBlogPostDto)
  }

  async findAll() {
    const categories = await this._blogPostRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._blogPostRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updateBlogPostDto: UpdateBlogPostDto) {
    return this._blogPostRepository.createQueryBuilder()
          .update(new UpdateBlogPostDto)
          .set({...updateBlogPostDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._blogPostRepository.createQueryBuilder()
          .delete()
          .from(BlogPost)
          .where('id=:id',{id:id})
          .execute();
  }
}
