import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginAuthDto } from './dto/login-auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async login(usuario: LoginAuthDto) {
    const payload = {
      email: usuario.email,
      id: usuario.id,
      nome: usuario.nome,
    };
    return {
      access_token: this.jwtService.sign(payload),
      usuario: {
        id: usuario.id,
        email: usuario.email,
        nome: usuario.nome,
      },
    };
  }

  async cadastrar(createUsuarioDto: CreateUsuarioDto) {
    const existe = await this.usuarioService.buscarEmail(
      createUsuarioDto.email,
    );
    if (existe) {
      throw new UnauthorizedException('Email já existe.');
    }
    return this.usuarioService.cadastrar(createUsuarioDto);
  }

  async validarUsuario(email: string, senha: string) {
    const usuario = await this.usuarioService.buscarEmail(email);
    if (usuario && usuario.senha === senha) {
      const { senha, ...result } = usuario;
      return result;
    }
    return null;
  }

  async buscarUsuario(email: string) {
    return await this.usuarioService.buscarPerfil(email);
  }
}
