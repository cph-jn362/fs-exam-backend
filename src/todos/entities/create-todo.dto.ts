import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateTodoDTO {
  @IsNotEmpty()
  @IsString()
  readonly text: string;

  @IsBoolean()
  readonly done: boolean;

  constructor(text: string, done: boolean) {
    this.text = text;
    this.done = done;
  }
}
