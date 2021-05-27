const bcrypt = require('bcryptjs')

const encryptPassword = (password: string) => {
  return bcrypt.hash(password, 8)
}

const comparePassword = (password1: string, password2: string) => {
  return bcrypt.compare(password1, password2)
}

export {
  encryptPassword,
  comparePassword
}