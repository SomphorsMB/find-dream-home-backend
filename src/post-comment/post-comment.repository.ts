import { EntityRepository, Repository } from "typeorm";
import { PostComment } from "./entities/post-comment.entity";

@EntityRepository(PostComment)
export class PostCommentRepository extends Repository<PostComment>{}