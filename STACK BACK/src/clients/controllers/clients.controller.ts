import { Controller, Post, Body, Get, Request, Logger, Res, Query, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport'
import { ClientsService } from '../services/clients.service';
import { ResponseInterface } from 'src/common/interfaces/ResponseInterface';
import { LoginClientDto } from '../dto/CreateClient.dto';

@Controller('clients')
export class ClientsController {
  private logger: Logger;
  constructor(private service: ClientsService) {
    this.logger = new Logger("Clients Controller Action");
  }


  //@UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req, @Body() loginClientDto: LoginClientDto): Promise<ResponseInterface | Error> {
    return await this.service.findClientByLoginClientDto(loginClientDto)
  }
}
