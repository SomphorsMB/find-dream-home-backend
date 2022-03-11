import { EntityRepository, Repository } from "typeorm";
import { FrequentlyQuestion } from "./entities/frequently-question.entity";

@EntityRepository(FrequentlyQuestion)
export class FrequentlyQuestionRepository extends Repository<FrequentlyQuestion>{}