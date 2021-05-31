import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

class UsersController {

  async create(req: any, res: Response): Promise<Response> {
    const { email, password, name, phone } = req.body
    const { key: avatar } = req.file || { key: 'default_avatar.png' }

    const usersService = new UsersService()

    try {
      const userResponse = await usersService.create({ email, password, name, phone, avatar })

      if (userResponse.status === 409) {
        return res.status(409).json(userResponse)
      }

      return res.status(userResponse.status).json(userResponse.user)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }

  }

  async update(req: any, res: Response): Promise<Response> {
    const { name, phone } = req.body
    const { id } = req.params
    const { key: avatar } = req.file || { key: undefined }

    const usersService = new UsersService()

    try {
      const userResponse = await usersService.update({ id, name, phone, avatar })

      if (userResponse.status === 409) {
        return res.status(409).json(userResponse)
      }

      return res.status(userResponse.status).json(userResponse)

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

    const usersService = new UsersService()

    try {
      const userResponse = await usersService.delete(id)

      if (userResponse.status === 409) {
        return res.status(409).json(userResponse)
      }

      return res.status(userResponse.status).json(userResponse)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }
  }

  async listById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const usersService = new UsersService()

    try {

      const userResponse = await usersService.listById(id)

      if (userResponse.status === 409) {
        return res.status(409).json(userResponse)
      }

      return res.status(200).json(userResponse.list)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }

  }

}

export { UsersController }