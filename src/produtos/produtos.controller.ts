import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { FiltroProdutoDto } from './dto/filtro-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  async criar(@Body() createProdutoDto: CreateProdutoDto) {
    return await this.produtosService.criar(createProdutoDto);
  }

  @Get()
  async buscarVarios(
    @Query(new ValidationPipe({ transform: true })) query: FiltroProdutoDto,
  ) {
    return await this.produtosService.buscarVarios(query);
  }

  @Get(':id')
  async buscarUm(@Param('id') id: string) {
    return await this.produtosService.buscarUm(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ) {
    return await this.produtosService.atualizar(+id, updateProdutoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.produtosService.deletar(+id);
  }
}
