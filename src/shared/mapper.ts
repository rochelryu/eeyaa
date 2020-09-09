import { ClientDto } from 'src/clients/dto/CreateClient.dto';
import { ClientsEntity } from 'src/clients/schema/clients.entity';

export const toClientDto = (data: ClientsEntity): ClientDto => {  
  const { id, nameEntreprise, address, email } = data;
  const clientDto: ClientDto = { id, nameEntreprise, address, email,  };
  return clientDto;
};