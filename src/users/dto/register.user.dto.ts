import { IsEmail, IsNotEmpty } from 'class-validator';

export class Register {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  age: number;
}
