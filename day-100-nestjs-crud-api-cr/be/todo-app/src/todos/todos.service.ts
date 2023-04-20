import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '../models/todo.model';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}
  async create(createTodoDto: CreateTodoDto) {
    if (createTodoDto.title === '') {
      throw new BadRequestException('Title is required');
    }
    const newTodo = new this.todoModel(createTodoDto);

    const result = await newTodo.save();
    return result;
  }

  async findAll() {
    const result = await this.todoModel.find({});
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const updateTodo = await this.todoModel.findOneAndUpdate(
      { _id: id },
      updateTodoDto,
    );
    return updateTodo;
  }

  async remove(id: string) {
    const deleteTodo = await this.todoModel.findByIdAndDelete({ _id: id });
    return deleteTodo;
  }
}
