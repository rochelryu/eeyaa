import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ClientsEntity } from 'src/clients/schema/clients.entity';
import { ClientsService } from './services/clients.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ ClientsEntity ]),
  ],
  providers: [ClientsService],
  exports: [ClientsService],
  controllers: []
})
export class ClientsModule {}
