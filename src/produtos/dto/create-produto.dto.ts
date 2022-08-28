export class CreateProdutoDto {
  nome: string;
  descricao?: string;
  preco?: number;
  precoPromocional?: number;
  flagDeStatus?: string;
  categoria?: string;
}
