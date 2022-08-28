import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutosService } from 'src/produtos/produtos.service';
import { ProdutosModule } from 'src/produtos/produtos.module';

@Module({
  controllers: [WishlistController],
  providers: [WishlistService, PrismaService],
  imports: [ProdutosModule],
})
export class WishlistModule {}
