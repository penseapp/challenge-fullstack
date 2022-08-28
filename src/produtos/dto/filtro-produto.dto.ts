import { Transform, Type } from 'class-transformer';
import { IsArray, IsOptional } from 'class-validator';

export class FiltroProdutoDto {
  @IsArray()
  @IsOptional()
  @Transform(({ value }) => value.split(',').map((item) => Number(item)))
  ids?: number[];
  @IsOptional()
  nome?: string;
  @IsOptional()
  ordem?: string;
}
