import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { LoginClientDto } from 'src/clients/dto/CreateClient.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate({ email, password }: LoginClientDto): Promise<any> {
    const user = await this.authService.validateClient({ email, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}