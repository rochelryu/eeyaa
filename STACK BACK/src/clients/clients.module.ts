import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ClientsEntity } from 'src/clients/schema/clients.entity';
import { ClientsService } from './services/clients.service';
import { ClientsController } from './controllers/clients.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forFeature([ ClientsEntity ]),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: process.env.SESSION_SECRET,
      signOptions: {
        expiresIn: process.env.EXPIRES_IN
      }
    })
  ],
  providers: [ClientsService],
  exports: [ClientsService],
  controllers: [ClientsController]
})
export class ClientsModule {}
