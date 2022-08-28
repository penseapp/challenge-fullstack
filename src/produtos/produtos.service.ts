import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { FiltroProdutoDto } from './dto/filtro-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  async criar(createProdutoDto: CreateProdutoDto) {
    return await this.prisma.produto.create({
      data: {
        nome: createProdutoDto.nome,
        descricao: createProdutoDto.descricao,
        preco: createProdutoDto.preco,
        precoPromocional: createProdutoDto.precoPromocional,
        flagDeStatus: createProdutoDto.flagDeStatus,
        categoria: createProdutoDto.categoria,
      },
    });
  }

  async buscarVarios(filtro: FiltroProdutoDto) {
    const filtroCustomizado = this.gerarFiltroPesquisa(filtro);
    return await this.prisma.produto.findMany(filtroCustomizado);
  }

  gerarFiltroPesquisa(filtro: FiltroProdutoDto) {
    let filtroCustomizado = {};
    if (filtro.ids) {
      filtroCustomizado = {
        ...filtroCustomizado,
        where: {
          id: {
            in: filtro.ids,
          },
        },
      };
    }
    if (filtro.nome) {
      filtroCustomizado = {
        ...filtroCustomizado,
        where: {
          OR: [
            {
              nome: {
                contains: filtro.nome,
              },
            },
            {
              categoria: filtro.nome,
            },
          ],
        },
      };
    }
    if (filtro.ordem === 'desc' || filtro.ordem === 'asc') {
      filtroCustomizado = {
        ...filtroCustomizado,
        orderBy: {
          preco: filtro.ordem,
        },
      };
    }
    if (filtro.ordem === 'promo') {
      filtroCustomizado = {
        ...filtroCustomizado,
        orderBy: {
          precoPromocional: 'desc',
        },
      };
    }
    if (filtro.ordem === 'alf') {
      filtroCustomizado = {
        ...filtroCustomizado,
        orderBy: {
          nome: 'asc',
        },
      };
    }
    return filtroCustomizado;
  }

  async buscarUm(id: number) {
    return await this.prisma.produto.findFirst({
      where: {
        id: id,
      },
    });
  }

  async atualizar(id: number, updateProdutoDto: UpdateProdutoDto) {
    return await this.prisma.produto.update({
      where: {
        id: id,
      },
      data: updateProdutoDto,
    });
  }

  async deletar(id: number) {
    return await this.prisma.produto.delete({
      where: {
        id,
      },
    });
  }
}
