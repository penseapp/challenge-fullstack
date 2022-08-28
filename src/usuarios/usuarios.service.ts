import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async cadastrar(createUsuarioDto: CreateUsuarioDto) {
    return await this.prisma.usuario.create({
      data: createUsuarioDto,
    });
  }

  async buscarEmail(email: string) {
    const usuario = await this.prisma.usuario.findFirst({
      where: {
        email: email,
      },
    });
    return usuario;
  }

  async buscarPerfil(email: string) {
    const usuario = await this.prisma.usuario.findFirst({
      select: {
        id: true,
        nome: true,
        email: true,
        wishlist: {
          select: {
            produto: true,
          },
        },
      },

      where: {
        email: email,
      },
    });
    return usuario;
  }
}
