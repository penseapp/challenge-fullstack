import { isInt, IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class CreateWishlistDto {
  @IsNotEmpty()
  @IsNumber()
  idProduto: number;
}
