import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
  nome?: string;
  descricao?: string;
  preco?: number;
  precoPromocional?: number;
  flagDeStatus: string;
  categoria?: string;
}
