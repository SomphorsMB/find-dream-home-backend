import { Injectable } from '@nestjs/common';
import { AgentRepository } from './agent.repository';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Agent } from './entities/agent.entity';

@Injectable()
export class AgentService {
  constructor(private readonly _agentRepository:AgentRepository){}

  create(createAgentDto: CreateAgentDto) {
    // return this._agentRepository
      // .createQueryBuilder('category')
      // .insert()
      // .into('category')
      // .values({...createCategoryDto})
      // .execute();
      return this._agentRepository.create(createAgentDto)
  }

  async findAll() {
    const categories = await this._agentRepository.createQueryBuilder('category')
                            .select('category')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._agentRepository.createQueryBuilder('category')
        .select('category')
        .where('category.id=:id',{id:id})
        .getOne();
    return category;
  }

  update(id: number, updateAgentDto: UpdateAgentDto) {
    return this._agentRepository.createQueryBuilder()
          .update(new UpdateAgentDto)
          .set({...updateAgentDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._agentRepository.createQueryBuilder()
          .delete()
          .from(Agent)
          .where('id=:id',{id:id})
          .execute();
  }
}
