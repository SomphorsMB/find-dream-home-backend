import { Module } from '@nestjs/common';
import { FrequentlyQuestionService } from './frequently-question.service';
import { FrequentlyQuestionController } from './frequently-question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrequentlyQuestion } from './entities/frequently-question.entity';
import { FrequentlyQuestionRepository } from './frequently-question.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FrequentlyQuestion, FrequentlyQuestionRepository])],
  controllers: [FrequentlyQuestionController],
  providers: [FrequentlyQuestionService]
})
export class FrequentlyQuestionModule {}
