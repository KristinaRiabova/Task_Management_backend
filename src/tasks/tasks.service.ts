import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  create(task: Task): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }

  async update(id: number, task: Partial<Task>): Promise<Task> {
    await this.tasksRepository.update(id, task);

    return this.tasksRepository.findOne({ where: { id } });
  }

  async findBySearchQuery(query: string): Promise<Task[]> {
    return this.tasksRepository.find({
      where: [{ title: query }, { description: query }],
    });
  }
}

