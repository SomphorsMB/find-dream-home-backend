import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './entities/blog-post.entity';
import { BlogPostRepository } from './blog-post.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost, BlogPostRepository])],
  controllers: [BlogPostController],
  providers: [BlogPostService]
})
export class BlogPostModule {}
