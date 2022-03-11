import { IsNotEmpty } from "class-validator";

export class CreatePropertyDto {
    @IsNotEmpty()
    readonly name:string;
}
