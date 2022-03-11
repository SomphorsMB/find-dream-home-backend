import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyLayoutDto } from './create-property-layout.dto';

export class UpdatePropertyLayoutDto extends PartialType(CreatePropertyLayoutDto) {}
