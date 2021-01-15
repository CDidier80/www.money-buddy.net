require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const  { User }  = require("../models")
const { ControllerLoggers } = require('./logs')
const log = ControllerLoggers.UserControllerLog 
const errorLog = ControllerLoggers.UserControllerErrorLog
const saltRounds = parseInt(process.env.SALT_ROUNDS)

// const { Op, literal, fn, col  } = require('sequelize')


/**
 * @param {Object} req.body - The user object.
 * @param {Integer} req.body.email - The user's email address.
 * @param {String} req.body.password - The user's raw-text password.
 */

const CreateUser = async (req, res) => {
    log(CreateUser, req)
    try {
        const userExists = await User.findOne({
            where: { email: req.body.email },
            raw: true
        })
        if (userExists){ 
            return res.send({ message: 'account already exists' })
        } else {
            console.log("NO DUPLICATE USER ACCOUNT FOUND.")
        }
        let { password, email } = req.body
        password = await bcrypt.hash(password, saltRounds)
        let updatedBody = { email, password }
        let user = await User.create(updatedBody)
        res.send(user)
    } catch (error) {
        errorLog(CreateUser, error) 
    }
}

const LogInUser = async (req, res) => {
    try {
        let { email } = req.body
        console.log("email:", email)
        const user = await User.findOne({
            where: {
                email: email
            }
        })

        if (user && await bcrypt.compare(req.body.password, user.password)) {
            console.log("reached")
            const payload = {
                _id: user._id,
                email: user.email,
            }
            const secretKey = process.env.APP_SECRET
            let token = jwt.sign(payload, secretKey)
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
    console.log(req)

    log(DeleteUser, req)
    console.log("req.data", req.data)
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
        const { token } = res.locals
        const user = await User.findByPk(token.id, {
            attributes: ['id', 'name', 'emai']
        })
        res.send({ user, status: 'OK' })
    } catch (error) {
        errorLog(RefreshSession, req)
    }
}

module.exports = {
    CreateUser,
    ReadUser,
    DeleteUser,
    UpdatePassword,
    UpdateEmail,
    LogInUser,
    RefreshSession
}