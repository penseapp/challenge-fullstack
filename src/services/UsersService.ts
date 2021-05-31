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
  avatar?: string;
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
      avatar,
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

  async update({ id, name, phone, avatar }: IUsersUpdate) {

    const userExists = await this.usersRepository.findOne({ id })
    if (!userExists) {
      return {
        status: 409,
        message: 'Nenhum usuário foi encontrado!'
      }
    }
    const data = {
      id,
      name,
      phone,
      avatar
    }

    const schema = Yup.object().shape({
      id: Yup.string().required(),
      name: name === undefined ? null : Yup.string().required(),
      phone: phone === undefined ? null : Yup.string().optional(),
      avatar: Yup.string().optional(),
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

  async listById(id: string) {

    const list = await this.usersRepository.find({ id })
    if (!list) {
      return {
        status: 409,
        message: 'Usuário não encontrado!'
      }
    }

    return {
      status: 200,
      list
    }
  }

}

export { UsersService }