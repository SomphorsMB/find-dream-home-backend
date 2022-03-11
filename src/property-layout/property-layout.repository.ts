import { EntityRepository, Repository } from "typeorm";
import { PropertyLayout } from "./entities/property-layout.entity";

@EntityRepository(PropertyLayout)
export class PropertyLayoutRepository extends Repository<PropertyLayout>{}