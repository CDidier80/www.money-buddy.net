require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const  { User }  = require("../models")
const { ControllerLoggers } = require('./logs')
const secretKey = process.env.APP_SECRET
const log = ControllerLoggers.UserControllerLog 
const saltRounds = parseInt(process.env.SALT_ROUNDS)
const errorLog = ControllerLoggers.UserControllerErrorLog


/**
 * @param {Object} req.body - The user object.
 * @param {Integer} req.body.email - The user's email address.
 * @param {String} req.body.password - The user's raw-text password.
 */

 const createToken = (id, email) => jwt.sign({id: id, email: email}, secretKey)

const CreateUser = async (req, res) => {
    log(CreateUser, req)
    try {
        const userExists = await User.findOne({
            where: { email: req.body.email },
            raw: true
        })
        if (userExists){ 
            return res.send({ message: 'account already exists' })
        } 
        let { password, email } = req.body
        password = await bcrypt.hash(password, saltRounds)
        let updatedBody = { email, password }
        let user = await User.create(updatedBody)
        const { id } = user
        let token = createToken(id, email)
        res.send({user, token})
    } catch (error) {
        errorLog(CreateUser, error) 
    }
}


const LogInUser = async (req, res) => {
    try {
        let { email } = req.body
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            const payloadForJWT = {
                _id: user._id,
                email: user.email,
            }
            let token = jwt.sign(payloadForJWT, secretKey)
            return res.send({ user, token })
        }  
        res.status(401).send({status: 401})
    } catch (error) {
        errorLog(LogInUser, error)
    }
}


const ReadUser = async (req, res) => {
    log(ReadUser, req)
    try {
        let userId = req.params.user_id
        let user = await User.findByPk(userId)
        res.send(user)
    } catch (error) {
        errorLog(ReadUser, error)
    }
}


const UpdatePassword = async (req, res) => {
    log(UpdatePassword, req)
    try {
        const { userId } = req.body
        let password  = req.body.password
        password = await bcrypt.hash(password, saltRounds) 
        const payload = { password: password }
        const user = await User.update(payload, {
            where: {
                id: userId
            },
            returning: true
        })
        res.send(user)
    } catch (error) {
        errorLog(UpdatePassword, error)
    }
}


const UpdateEmail = async (req, res) => {
    log(UpdateEmail, req)
    try {
        const { userId, email } = req.body
        const payload = { email: email }
        const updatedUser = await User.update(payload, {
            where: {
                id: userId
            },
            returning: true
        })
        res.send(updatedUser)
    } catch (error) {
        errorLog(UpdateEmail, error)
    }
}


const DeleteUser = async (req, res) => {
    log(DeleteUser, req)
    try {
        let userId = req.body.userId
        await User.destroy({
            where: {
                id: userId
            }
        })
        res.send({ message: `Deleted user with ide of ${userId}` })
    } catch (error) {
        errorLog(DeleteUser, error)
    }
}


const RefreshSession = async (req, res) => {
    try {
        const [tokenExists, tokenValue] = "authorization" in req.headers ? [true, req.headers.authorization] : [false, null]
        console.log(tokenExists ? `Received JSON web token with value: ${tokenValue}` : `NO TOKEN RECEIVED`)
        const tokenIsValid = tokenExists && jwt.verify(tokenValue, secretKey)
        
        const [ responseToken, responseStatus, responsePayload ] = tokenIsValid ? 
        [tokenValue, 200, (() => {
            const { id, email } = jwt.decode(tokenValue)
            console.log("id, email: ", id, email)
            return { id: id, email: email}
        })()] :
        [null, 401, "unauthorized"] 
        res.locals.token = responseToken
        return res.status(responseStatus).send(responsePayload)
    } catch (error) {
        errorLog(RefreshSession, req)
    }
}


module.exports = {
    RefreshSession,
    UpdatePassword,
    UpdateEmail,
    DeleteUser,
    CreateUser,
    LogInUser,
    ReadUser,
}