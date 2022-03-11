import { IsNotEmpty } from "class-validator";

export class CreateFrequentlyQuestionDto {
    @IsNotEmpty()
    question:string;

    @IsNotEmpty()
    answer:string;
}
