import { Request, Response } from 'express'
import { FavoritesService } from '../services/FavoritesService'

class FavoritesController {

  async add(req: any, res: Response): Promise<Response> {
    const { product_id, user_id } = req.params

    const favoritesService = new FavoritesService()

    try {
      const favoriteResponse = await favoritesService.add({ user_id, product_id })

      if (favoriteResponse.status === 409) {
        return res.status(409).json(favoriteResponse)
      }

      return res.status(favoriteResponse.status).json(favoriteResponse)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }

  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { product_id, user_id } = req.params

    const favoritesService = new FavoritesService()

    try {
      const favoriteResponse = await favoritesService.delete({user_id, product_id})

      if (favoriteResponse.status === 409) {
        return res.status(409).json(favoriteResponse)
      }

      return res.status(favoriteResponse.status).json(favoriteResponse)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }
  }

  async list(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params
    const favoritesService = new FavoritesService()

    try {

      const favoriteResponse = await favoritesService.listByUser(user_id)

      if (favoriteResponse.status === 409) {
        return res.status(409).json(favoriteResponse)
      }

      return res.status(200).json(favoriteResponse.favoritesProducts)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }

  }

}

export { FavoritesController }