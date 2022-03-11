import { IsNotEmpty } from "class-validator";

export class CreateBlogPostDto {
    @IsNotEmpty()
    title:string;

    @IsNotEmpty()
    image:string;

    @IsNotEmpty()
    content: string;
}
