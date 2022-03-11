import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyCommentDto } from './create-property-comment.dto';

export class UpdatePropertyCommentDto extends PartialType(CreatePropertyCommentDto) {}
