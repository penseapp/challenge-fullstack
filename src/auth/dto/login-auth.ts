import { IsEmail, IsNotEmpty, Min, MinLength } from 'class-validator';

export class LoginAuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  id: string;
  nome: string;
}
