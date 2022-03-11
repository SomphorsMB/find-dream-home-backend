import { EntityRepository, Repository } from "typeorm";
import { PropertyComment } from "./entities/property-comment.entity";

@EntityRepository(PropertyComment)
export class PropertyCommentRepository extends Repository<PropertyComment>{}