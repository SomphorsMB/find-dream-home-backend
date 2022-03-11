import { EntityRepository, Repository } from "typeorm";
import { PropertyType } from "./entities/property-type.entity";

@EntityRepository(PropertyType)
export class PropertyTypeRepository extends Repository<PropertyType>{}