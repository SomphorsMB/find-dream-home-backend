import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { ServiceRepository } from './service.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Service, ServiceRepository])],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule {}
