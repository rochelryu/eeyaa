import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { ClientDto, CreateClientDto, LoginClientDto } from 'src/clients/dto/CreateClient.dto';
import { ClientsEntity } from 'src/clients/schema/clients.entity';
import { toClientDto } from 'src/shared/mapper';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {

  constructor(@InjectRepository(ClientsEntity) private readonly clientsRepo: Repository<ClientsEntity>) { }
  

  async findOneForJWT(options?: object): Promise<ClientDto> {
    const user =  await this.clientsRepo.findOne(options);    
    return toClientDto(user);  
  }


  async findByLogin({ email, password }: LoginClientDto): Promise<ClientDto> {    
    const client = await this.clientsRepo.findOne({ where: { email } });
    
    if (!client) {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
    }
    
    // compare passwords    
    const areEqual = await compare(password, client.password);
    
    if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
    }
    
    return toClientDto(client);  
  }

  async findByPayload({ email }: any): Promise<ClientDto> {
    return await this.findOneForJWT({ 
        where:  { email } });  
  }

  async create(clientDto: CreateClientDto): Promise<ClientDto> {    
    const { nameEntreprise, password, email, address, registreCommerce, describe, name, birthDate, fonctions } = clientDto;
    
    // check if the user exists in the db    
    const userInDb = await this.clientsRepo.findOne({ 
        where: { email } 
    });
    if (userInDb) {
        throw new HttpException('Client already exists', HttpStatus.BAD_REQUEST);    
    }
    
    const user: ClientsEntity = await this.clientsRepo.create({ nameEntreprise, password, email, address, registreCommerce, describe, name, birthDate, fonctions });
    await this.clientsRepo.save(user);
    return toClientDto(user);  
  }


}
