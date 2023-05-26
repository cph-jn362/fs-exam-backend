import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { CreateTodoDTO } from './entities/create-todo.dto';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepositoy: Repository<TodoEntity>
    ){}

    createTodo(todo: CreateTodoDTO){
        return this.todoRepositoy.save(todo);
    }

    findAll(){
        return this.todoRepositoy.find();
    }

    findOne(id: number){
        return this.todoRepositoy.findOneBy({id: id});
    }

    remove(id: number){
        return this.todoRepositoy.delete(id);
    }
}
