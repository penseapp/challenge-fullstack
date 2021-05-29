import { Request, Response } from 'express'
import { AuthService } from '../services/AuthService'

class AuthController {

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const authService = new AuthService()

    try {
      const loginResponse = await authService.login({ email, password })

      return res.status(loginResponse.status).json(loginResponse)

    } catch (error) {
      console.error(' ERROR ', error)
      return res.status(500).json({
        cod: 500,
        message: 'Ocorreu um erro inesperado! Verifique sua conexão com a internet ou tente novamente mais tarde.'
      })
    }
  }

}

export { AuthController }