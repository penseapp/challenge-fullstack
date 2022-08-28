import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
  HttpStatus,
  HttpCode,
  Req,
} from '@nestjs/common';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  async login(@Req() req) {
    return await this.authService.login(req.user);
  }

  @Post('cadastrar')
  async cadastrar(@Body() createUsuarioDto: CreateUsuarioDto) {
    return await this.authService.cadastrar(createUsuarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('token')
  async validarToken(@Req() req) {
    const usuario = await this.authService.buscarUsuario(req.user.email);
    return {
      auth: true,
      usuario: usuario,
    };
  }
}
