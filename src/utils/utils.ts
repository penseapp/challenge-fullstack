import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import auth from '../config/auth'

const encryptPassword = (password: string) => {
  return bcrypt.hash(password, 8)
}

const comparePassword = (password1: string, password2: string) => {
  return bcrypt.compare(password1, password2)
}

const generateJwt = (params: {}) => {
  return jwt.sign(params, auth.secret, { expiresIn: auth.expiresIn })
}

const verifyJwt = (token, cb) => {
  return jwt.verify(token, auth.secret, cb)
}

export {
  encryptPassword,
  comparePassword,
  generateJwt,
  verifyJwt
}