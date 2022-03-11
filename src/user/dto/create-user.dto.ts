import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    firstName:  string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    phoneNumber: number;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    profile: string;
}
