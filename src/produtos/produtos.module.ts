import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService, PrismaService],
  exports: [ProdutosService],
})
export class ProdutosModule {}
