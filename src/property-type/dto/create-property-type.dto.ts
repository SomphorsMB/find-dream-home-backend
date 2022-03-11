import { IsNotEmpty } from "class-validator";

export class CreatePropertyTypeDto {
    @IsNotEmpty()
    type:  string;
}
