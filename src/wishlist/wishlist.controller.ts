import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req, @Body() createWishlistDto: CreateWishlistDto) {
    return await this.wishlistService.create(
      req.user.id,
      createWishlistDto.idProduto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async buscarWishlist(@Req() req) {
    return await this.wishlistService.buscarWishlist(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Req() req, @Param('id') idProduto: string) {
    return await this.wishlistService.remove(+idProduto, req.user.id);
  }
}
