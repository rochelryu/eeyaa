import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { ClientDto, CreateClientDto, LoginClientDto } from 'src/clients/dto/CreateClient.dto';
import { ClientsEntity } from 'src/clients/schema/clients.entity';
import { ResponseInterface } from 'src/common/interfaces/ResponseInterface';
import { toClientDto } from 'src/shared/mapper';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(ClientsEntity) private readonly clientsRepo: Repository<ClientsEntity>,
    private jwtService: JwtService
  ) { }
  

  async findOneForJWT(options?: object): Promise<ClientDto> {
    const user =  await this.clientsRepo.findOne(options);    
    return toClientDto(user);  
  }


  async findClientByLoginClientDto({ email, password }: LoginClientDto): Promise<ResponseInterface| Error> {    
    const client = await this.clientsRepo.findOne({ where: { email } });
    
    if (!client) {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
    }
    
    // compare passwords    
    const areEqual = await compare(password, client.password);
    
    if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
    }
    
    const payload = toClientDto(client);
    const jwt = await this.jwtService.sign(payload);
    
    return { access_token: jwt }
  }

  async create(clientDto: CreateClientDto):  Promise<ResponseInterface| Error> {    
    const { nameEntreprise, password, email, address, registreCommerce, describe, name, birthDate, fonctions } = clientDto;
    
    // check if the user exists in the db    
    const userInDb = await this.clientsRepo.findOne({ 
      where: [
        { email },
        { nameEntreprise },
        { registreCommerce },
        ] 
    });
    if (userInDb) {
        throw new HttpException('Ce Client existe déjà', HttpStatus.BAD_REQUEST);    
    }
    
    const client: ClientsEntity = await this.clientsRepo.create({ nameEntreprise, password, email, address, registreCommerce, describe, name, birthDate, fonctions });
    await this.clientsRepo.save(client);

    const payload = toClientDto(client);
    const jwt = await this.jwtService.sign(payload);
    
    return { access_token: jwt } 
  }


}
