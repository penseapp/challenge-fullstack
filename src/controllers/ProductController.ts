import { Request, Response } from 'express'
import { ProductsService } from '../services/ProductsService'

class ProductsController {

  async create(req, res: Response): Promise<Response> {
    const {
      name,
      description,
      price,
      promotional_price,
      status_flag,
      category
    } = req.body
    const { file } = req

    let image_url = null

    if (file) image_url = file.path

    const productsService = new ProductsService()

    try {
      const productResponse = await productsService.create({
        name,
        description,
        price,
        promotional_price,
        status_flag,
        category,
        image_url
      })

      return res.status(productResponse.status).json(productResponse.product)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const {
      name,
      description,
      price,
      promotional_price,
      status_flag,
      category,
      image_url
    } = req.body

    const productsService = new ProductsService()

    try {
      const productResponse = await productsService.update({
        id,
        name,
        description,
        price,
        promotional_price,
        status_flag,
        category,
        image_url
      })

      if (productResponse.status === 409) {
        return res.status(409).json(productResponse)
      }

      return res.status(productResponse.status).json(productResponse)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const productsService = new ProductsService()

    try {

      const productResponse = await productsService.delete(id)

      if (productResponse.status === 409) {
        return res.status(409).json(productResponse)
      }

      return res.status(productResponse.status).json(productResponse)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }
  }

  async list_all(req: Request, res: Response): Promise<Response> {

    const productsService = new ProductsService()

    try {

      const productResponse = await productsService.list_all()

      if (productResponse.status === 409) {
        return res.status(409).json(productResponse)
      }

      return res.status(200).json(productResponse.list)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }

  }

  async listById(req: Request, res: Response): Promise<Response> {
    const { product_id, user_id } = req.params
    const productsService = new ProductsService()

    try {

      const productResponse = await productsService.listById(product_id, user_id)

      if (productResponse.status === 409) {
        return res.status(409).json(productResponse)
      }

      return res.status(200).json(productResponse.product)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }

  }
}

export { ProductsController }