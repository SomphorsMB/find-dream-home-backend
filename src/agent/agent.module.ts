import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agent } from './entities/agent.entity';
import { AgentRepository } from './agent.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Agent, AgentRepository])],
  controllers: [AgentController],
  providers: [AgentService]
})
export class AgentModule {}
