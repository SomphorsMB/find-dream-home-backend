import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyDetailDto } from './create-property-detail.dto';

export class UpdatePropertyDetailDto extends PartialType(CreatePropertyDetailDto) {}
