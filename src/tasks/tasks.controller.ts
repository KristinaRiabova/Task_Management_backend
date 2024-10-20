import { Controller, Get, Post, Delete, Put, Body, Param, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() task: Task): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.tasksService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() task: Partial<Task>): Promise<Task> {
    return this.tasksService.update(id, task);
  }

  @Get('search')
  search(@Query('query') query: string): Promise<Task[]> {
    return this.tasksService.findBySearchQuery(query);
  }
}
