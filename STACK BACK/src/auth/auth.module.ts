import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ClientsModule } from 'src/clients/clients.module';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        ClientsModule,
        PassportModule
    ],
    controllers: [],
    providers: [AuthService, LocalStrategy],

})
export class AuthModule {}
