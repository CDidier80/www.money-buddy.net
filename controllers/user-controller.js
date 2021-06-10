const Auth = require('../Auth')
require('dotenv').config()
const { User } = require("../models")
const { ControllerLoggers } = require('./logs')
const log = ControllerLoggers.UserControllerLog
const errorLog = ControllerLoggers.UserControllerErrorLog
const auth = new Auth()

const CreateUser = async (req, res) => {
    log(CreateUser, req)
    try {
        const emailAlreadyRegistered = await auth.checkAccountExistsWithEmail(req.body.email)
        if (emailAlreadyRegistered) {
            return res
                .status(409)
                .send('This email address is registered to an existing account.')
        }
        const hashedPassword = await auth.hashPassword(req.body.password)
        const user = await User.create({ email: req.body.email, password: hashedPassword })
        res.status(200).send({ user, token: auth.createToken({ id: user.id, email: user.email }) })
    } catch (error) {
        errorLog(CreateUser, error)
        res.status(500).send('Internal server error.')
    }
}

const LogInUser = async (req, res) => {
    try {
        const validUser = await auth.validateLoginCredentials(req.body)
        console.log({ validUser })
        return validUser
            ? res
                .status(200)
                .send({
                    user: validUser,
                    token: auth.createToken({ id: validUser.id, email: validUser.email })
                })
            : res
                .status(401)
                .send('Invalid email address or password.')
    } catch (error) {
        errorLog(LogInUser, error)
        res.status(500).send('Internal server error.')
    }
}

const ReadUser = async (req, res) => {
    log(ReadUser, req)
    try {
        let user = await User.findByPk(req.params.user_id)
        return user
            ? res.status(200).send(user)
            : res.status(404).send("User account doesn't exist")
    } catch (error) {
        errorLog(ReadUser, error)
        res.status(500).send('Internal server error.')
    }
}

const UpdatePassword = async (req, res) => {
    log(UpdatePassword, req)
    try {
        const user = await User.update(
            { password: auth.hashPassword(req.body.password) },
            { where: { id: req.body.userId }, returning: true })
        res.status(200).send(user)
    } catch (error) {
        errorLog(UpdatePassword, error)
        res.status(500).send('Internal server error.')
    }
}

const UpdateEmail = async (req, res) => {
    log(UpdateEmail, req)
    try {
        const updatedUser = await User.update(
            { email: req.body.email },
            { where: { id: req.body.userId }, returning: true })
        res.status(200).send(updatedUser)
    } catch (error) {
        errorLog(UpdateEmail, error)
        res.status(500).send('Internal server error.')
    }
}

const DeleteUser = async (req, res) => {
    log(DeleteUser, req)
    try {
        await User.destroy({ where: { id: req.body.userId } })
        res.status(200).send({ message: `Deleted user.` })
    } catch (error) {
        errorLog(DeleteUser, error)
        res.status(500).send('Internal server error.')
    }
}

const RefreshSession = async (req, res) => {
    try {
        const tokenIsValid = auth.verifyTokenValid(req.headers)
        if (!tokenIsValid) return res.status(401).send('Unauthorized action.')

        res.locals.token = req.headers.authorizaton
        const user = await auth.getUserByToken(req.headers.authorization)
        res.status(200).send({ user, token: req.headers.authorization })
    } catch (error) {
        errorLog(RefreshSession, req)
        res.status(500).send('Internal server error.')
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