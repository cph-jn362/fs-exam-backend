import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
import { TodoController } from './todo.controller';
import { UserEntity } from 'src/auth/entities/user.entity';
import { BoardMember } from 'src/auth/entities/boardmember.entity';
import { Tenant } from 'src/auth/entities/tenant.entity';
import { UserService } from 'src/users/user.service';



@Module({
    imports: [TypeOrmModule.forFeature([TodoEntity, UserEntity, BoardMember, Tenant])],
    providers: [TodoService, UserService],
    controllers: [TodoController],
})
export class TodoModule {}
