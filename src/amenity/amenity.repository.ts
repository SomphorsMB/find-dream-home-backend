import { EntityRepository, Repository } from "typeorm";
import { Amenity } from "./entities/amenity.entity";

@EntityRepository(Amenity)
export class AmenityRepository extends Repository<Amenity>{}