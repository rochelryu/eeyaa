import { ProjectsService } from './services/projects.service';
import { ProjectsController } from './controllers/projects.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
