import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { Product } from "../entities/Product"
import { UsersRepository } from "../repositories/UserRepository"
import { ProductsRepository } from "../repositories/ProductRepository"
import { Favorite } from "../entities/Favorite"
import { FavoriteRepository } from "../repositories/FavoriteRepository"

interface IFavorite {
  user_id: string;
  product_id: string;
}

class FavoritesService {
  private usersRepository: Repository<User>
  private productsRepository: Repository<Product>
  private favoritesRepository: Repository<Favorite>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository)
    this.productsRepository = getCustomRepository(ProductsRepository)
    this.favoritesRepository = getCustomRepository(FavoriteRepository)
  }

  async add({ user_id, product_id }: IFavorite) {

    const userExists = await this.usersRepository.findOne({ where: { id: user_id } })
    if (!userExists) {
      return {
        status: 409,
        message: 'Usuário não encontrado!'
      }
    }

    const productExists = await this.productsRepository.findOne({ where: { id: product_id } })
    if (!productExists) {
      return {
        status: 409,
        message: 'Produto não encontrado!'
      }
    }

    const userFavorites = await this.favoritesRepository.find({ user_id })
    const productId = product_id

    const data = {
      product_id,
      user_id
    }

    if (userFavorites) {
      const isFavorite = (await userFavorites).find(({ product_id }) => product_id === productId)
      if (!isFavorite) {
        const newFavorite = await this.favoritesRepository.create(data)
        await this.favoritesRepository.save(newFavorite)
      }
    } else {
      const newFavorite = await this.favoritesRepository.create(data)
      await this.favoritesRepository.save(newFavorite)
    }

    return {
      status: 201,
      message: "Producto adicionado aos favoritos!"
    }
  }


  async delete({ user_id, product_id }: IFavorite) {

    const productsList = await this.favoritesRepository.findOne({
      where: { user_id, product_id },
      relations: ["product"],
    })
    if(!productsList){
      return {
        status: 409,
        message: 'Produto não encontrado!'
      }
    }

    await this.favoritesRepository.delete({ id: productsList.id })

    return {
      status: 200,
      message: 'Produto removido dos favoritos com sucesso!',      
    }

  }

  async listByUser(user_id: string) {

    const productsList = await this.favoritesRepository.find({
      where: { user_id },
      relations: ["product"],
    })
    if(!productsList){
      return {
        status: 409,
        message: 'Você ainda não possui nenhum produto favorito!'
      }
    }

    const favoritesProducts = await productsList.map((obj) => obj.product)

    return {
      status: 200,
      favoritesProducts
    }
  }

}

export { FavoritesService }