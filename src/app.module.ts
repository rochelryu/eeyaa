import { EtatModule } from './etat/etat.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters/exception.filter';
import { ProjectsModule } from './projects/projects.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthenticatedModule } from './common/middleware/authenticated.module';
import { CompetencesModule } from './competences/competences.module';
import { ClientsModule } from './clients/clients.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    EtatModule,
    ProjectsModule,
    UsersModule,
    AuthenticatedModule,
    CompetencesModule,
    ClientsModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService,
  ],
})
export class AppModule {}
