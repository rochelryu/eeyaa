import { Injectable } from '@nestjs/common';
import { ClientDto, LoginClientDto } from 'src/clients/dto/CreateClient.dto';
import { ClientsService } from 'src/clients/services/clients.service';
import { ResponseInterface } from 'src/common/interfaces/ResponseInterface';
@Injectable()
export class AuthService {
  constructor(private clientsService: ClientsService) {}

}
