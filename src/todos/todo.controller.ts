import { Controller, Post, Get, Delete, Body, Param, ValidationPipe, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
import { CreateTodoDTO } from './entities/create-todo.dto';
import { UsePipes } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) { }

  @Get()
  async getAll(): Promise<TodoEntity[]> {
    return await this.todoService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() todo: CreateTodoDTO): Promise<CreateTodoDTO> {
    return await this.todoService.createTodo(todo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
