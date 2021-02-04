require('dotenv').config()
const jwt = require('jsonwebtoken')
const secretKey = process.env.APP_KEY

const getToken = (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1]  // separate them at the space
    token ? (res.locals.token = token) : (res.locals.token = null) // locals exist along the back-end routes within .res - > response sent. 
    next() // move on to verify token
}


const verifyToken = (req, res, next) => {
    const { token } = res.locals
    let valid = jwt.verify(token, secretKey)
    if (valid) {
        res.locals.token = valid
        return next()
    }
    res.status(401).send({ message: 'Unauthorized', status: 'error' })
}


module.exports = {
    verifyToken,
    getToken
}