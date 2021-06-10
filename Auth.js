require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const  { User }  = require("./models")

class Auth {
  constructor() {
    this.saltRounds = parseInt(process.env.SALT_ROUNDS)
    this.secretKey = process.env.APP_SECRET
  }

  createToken (tokenPayload) {
    return jwt.sign(tokenPayload, this.secretKey)
  }

  verifyTokenValid (reqHeaders) {
    const receivedToken = reqHeaders?.authorization
    console.log({ receivedToken })
    return receivedToken && jwt.verify(tokenValue, this.secretKey)
  }

  decodeToken (token) {
    return jwt.decode(token)
  }

  async hashPassword (password) {
    const hashedPassword = await bcrypt.hash(password, this.saltRounds)
    return hashedPassword
  }

  async validatePassword (plainTextPassword, savedHashedPassword) {
    const isValid = await bcrypt.compare(plainTextPassword, savedHashedPassword)
    return isValid
  }

  async checkAccountExistsWithEmail (email) {
    const user = await User.findOne({ where: { email } })
    return !!user
  }

  async validateLoginCredentials (reqBody) {
    const user = await User.findOne({ where: { email: reqBody.email } })
    if (!user) return false
    const passwordValid = await this.validatePassword(reqBody.password, user.password)
    if (!passwordValid) return false
    return user
  }

  async getUserByToken (token) {
    try {
      const user = await User.findOne({ where: { email: this.decodeToken(token).email } })
      return user
    } catch (error) {
      return false
    }
  }
}

module.exports = Auth