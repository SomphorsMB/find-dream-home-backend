import { IsNotEmpty } from "class-validator";

export class CreateAgentDto {
    @IsNotEmpty()
    firstName:  string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
    phoneNumber: number;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    profile: string;

    description: string;

    facebook: string;

    twitter: string;

    instagram: string;
}
