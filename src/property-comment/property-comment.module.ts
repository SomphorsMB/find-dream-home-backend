import { Module } from '@nestjs/common';
import { PropertyCommentService } from './property-comment.service';
import { PropertyCommentController } from './property-comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyComment } from './entities/property-comment.entity';
import { PropertyCommentRepository } from './property-comment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyComment, PropertyCommentRepository])],
  controllers: [PropertyCommentController],
  providers: [PropertyCommentService]
})
export class PropertyCommentModule {}
