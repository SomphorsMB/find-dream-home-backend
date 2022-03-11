import { IsNotEmpty } from "class-validator";

export class CreatePostCommentDto {
    @IsNotEmpty()
    content:string;
}
