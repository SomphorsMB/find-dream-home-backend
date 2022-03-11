import { IsNotEmpty } from "class-validator";

export class CreatePropertyDetailDto {
    @IsNotEmpty()
    price:  number;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    galleries: string;
}