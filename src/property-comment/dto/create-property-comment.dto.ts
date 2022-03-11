import { IsNotEmpty } from "class-validator";

export class CreatePropertyCommentDto {
    @IsNotEmpty()
    content:string;
}
