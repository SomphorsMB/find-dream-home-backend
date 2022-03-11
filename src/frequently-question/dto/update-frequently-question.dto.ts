import { PartialType } from '@nestjs/mapped-types';
import { CreateFrequentlyQuestionDto } from './create-frequently-question.dto';

export class UpdateFrequentlyQuestionDto extends PartialType(CreateFrequentlyQuestionDto) {}
