import { EntityRepository, Repository } from "typeorm";
import { PropertyDetail } from "./entities/property-detail.entity";



@EntityRepository(PropertyDetail)
export class PropertyDetailRepository extends Repository<PropertyDetail>{}