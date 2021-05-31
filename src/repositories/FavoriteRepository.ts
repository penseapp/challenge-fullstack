import { EntityRepository, Repository } from "typeorm"
import { Favorite } from '../entities/Favorite'

@EntityRepository(Favorite)
class FavoriteRepository extends Repository<Favorite> {

}

export { FavoriteRepository }