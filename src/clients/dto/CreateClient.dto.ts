import { IsNotEmpty } from 'class-validator/types/decorator/common/IsNotEmpty';
import { IsEmail } from 'class-validator/types/decorator/string/IsEmail';

export class CreateClientDto {  
  @IsNotEmpty()  nameEntreprise: string;
  @IsNotEmpty()  address: string;
  @IsNotEmpty() registreCommerce: string;
  @IsNotEmpty() describe: string;
  @IsNotEmpty()  name: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty()  @IsEmail()  email: string;

  @IsNotEmpty()  birthDate: Date;
  @IsNotEmpty() fonctions: string;
}


export class LoginClientDto {  
  @IsNotEmpty()  readonly email: string;
  @IsNotEmpty()  readonly password: string;
}

export class ClientDto {  
  @IsNotEmpty()  id: number;
  @IsNotEmpty()  nameEntreprise: string;
  @IsNotEmpty()  address: string;
  @IsNotEmpty()  @IsEmail()  email: string;
}