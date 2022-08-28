import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutosService } from 'src/produtos/produtos.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Injectable()
export class WishlistService {
  constructor(
    private prisma: PrismaService,
    private produtoService: ProdutosService,
  ) {}

  async create(idUsuario: number, idProduto: number) {
    const produto = await this.produtoService.buscarUm(idProduto);

    if (!produto) throw new BadRequestException('Produto não existe');

    const wishlist = await this.findOne(idUsuario, idProduto);
    if (wishlist)
      throw new BadRequestException('Produto já faz parte na wishlist');

    await this.prisma.wishlist.create({
      data: {
        idProduto: idProduto,
        idUsuario: idUsuario,
      },
    });
    return await this.prisma;
  }

  async findOne(idUsuario: number, idProduto) {
    return await this.prisma.wishlist.findFirst({
      where: {
        idProduto: idProduto,
        idUsuario: idUsuario,
      },
    });
  }

  async remove(idProduto: number, idUsuario: number) {
    const produto = await this.findOne(idUsuario, idProduto);
    if (!produto)
      throw new BadRequestException('Produto não existe na wishlist');
    return await this.prisma.wishlist.delete({
      where: {
        idProduto_idUsuario: { idProduto, idUsuario },
      },
    });
  }

  async buscarWishlist(idUsuario: number) {
    return await this.prisma.wishlist.findMany({
      where: {
        idUsuario: idUsuario,
      },
      select: {
        produto: true,
      },
    });
  }
}
