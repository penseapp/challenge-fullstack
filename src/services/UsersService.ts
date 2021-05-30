import { getCustomRepository, Repository } from "typeorm"
import * as Yup from 'yup'
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UserRepository"
import { encryptPassword } from '../utils/utils'

interface IUsersCreate {
  email: string;
  password: string;
  name: string;
  phone?: string;
  avatar?: string;
}

interface IUsersUpdate {
  id: string;
  name?: string;
  phone?: string;
}

class UsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create({ email, password, name, phone, avatar }: IUsersCreate) {

    const emailExists = await this.usersRepository.findOne({ email })
    if (emailExists) {
      return {
        status: 409,
        message: 'Este email já foi cadastrado anteriormente.'
      }
    }

    const secretPassword = await encryptPassword(password)

    if(phone === undefined) phone = ''

    const data = {
      email,
      password: secretPassword,
      name,
      phone,
      avatar
    }

    const schema = Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string().required(),
      name: Yup.string().required(),
      phone: Yup.string().optional(),
      avatar: Yup.string().optional(),
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const user = this.usersRepository.create(data)

    await this.usersRepository.save(user)

    return {
      status: 201,
      message: "Usuário criado com sucesso!",
      user
    }
  }

  async update({ id, name, phone }: IUsersUpdate) {

    const userExists = await this.usersRepository.findOne({ id })
    if (!userExists) {
      return {
        status: 409,
        message: 'Nenhum usuário foi encontrado!'
      }
    }

    const data = {
      name,
      phone
    }

    const schema = Yup.object().shape({
      name: name === undefined ? null : Yup.string().required(),
      phone: phone === undefined ? null : Yup.string().optional()
    })

    await schema.validate(data, {
      abortEarly: false
    })

    await this.usersRepository.save(data)

    return {
      status: 200,
      message: 'Dados atualizados com sucesso!'
    }
  }

  async delete(id: string) {

    const userExists = await this.usersRepository.findOne({ id })
    if (!userExists) {
      return {
        status: 409,
        message: 'Nenhum usuário encontrado.'
      }
    }

    await this.usersRepository.delete({ id })

    return {
      status: 200,
      message: 'Usuário deletado com sucesso!'
    }

  }

}

export { UsersService }