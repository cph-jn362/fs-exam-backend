import { Module } from '@nestjs/common';
import { ProblemController } from './problem.controller';
import { ProblemService } from './problem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemEntity } from './entities/problem.entity';
import { UserEntity } from '../auth/entities/user.entity';
import { Tenant } from '../auth/entities/tenant.entity';
import { BoardMember } from '../auth/entities/boardmember.entity';
import { UserService } from '../users/user.service';
import { AuthModule } from '../auth/auth.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([ProblemEntity, UserEntity, Tenant, BoardMember]), AuthModule, HttpModule],
  controllers: [ProblemController],
  providers: [ProblemService, UserService], 
})
export class ProblemModule {}
