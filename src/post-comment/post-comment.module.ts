import { Module } from '@nestjs/common';
import { PostCommentService } from './post-comment.service';
import { PostCommentController } from './post-comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostComment } from './entities/post-comment.entity';
import { PostCommentRepository } from './post-comment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostComment, PostCommentRepository])],
  controllers: [PostCommentController],
  providers: [PostCommentService]
})
export class PostCommentModule {}
