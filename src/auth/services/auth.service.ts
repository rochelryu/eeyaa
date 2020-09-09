import { Injectable } from '@nestjs/common';
import { ClientDto, LoginClientDto } from 'src/clients/dto/CreateClient.dto';
import { ClientsService } from 'src/clients/services/clients.service';
@Injectable()
export class AuthService {
  constructor(private clientsService: ClientsService) {}

  async validateClient({ email, password }: LoginClientDto): Promise<any> {
    let client: ClientDto
    try {
      client = await this.clientsService.findByLogin({ email, password });
    } catch (error) {
      return error;
    }
    return client;
  }

}
