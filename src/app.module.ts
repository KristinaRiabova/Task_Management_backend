import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: '123',
    database: 'task_manager',
    autoLoadEntities: true,
    synchronize: true,
  }), TasksModule,
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
