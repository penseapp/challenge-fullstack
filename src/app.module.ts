import { Module } from '@nestjs/common';

import { ProdutosModule } from './produtos/produtos.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { WishlistModule } from './wishlist/wishlist.module';

@Module({
  imports: [ProdutosModule, AuthModule, UsuariosModule, WishlistModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
