import { EntityRepository, Repository } from "typeorm";
import { Feature } from "./entities/feature.entity";

@EntityRepository(Feature)
export class FeatureRepository extends Repository<Feature>{}