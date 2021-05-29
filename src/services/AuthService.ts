import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UserRepository"
import { comparePassword, generateJwt } from "../utils/utils"

interface ILogin {
  email: string,
  password: string
}

class AuthService {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getCustomRepository(UsersRepository)
  }

  async login({ email, password }: ILogin) {

    let user = await this.userRepository.findOne({ where: { email } })
    if (!user) {
      return {
        status: 402,
        message: 'Email ou senha incorretos.'
      }
    }

    if (!await comparePassword(password, user.password)) {
      return {
        cod: 402,
        message: 'Email ou senha incorretos.'
      }
    }
    
    delete user.password
    user["token"] = generateJwt({ id: user.id })

    return {
      status: 201,
      message: "Login realizado com sucesso!",
      user
    }

  }

}

export { AuthService }