const AppRouter = require('./routes/AppRouter')
const bodyParser = require('body-parser')
const express = require("express")
const helmet = require('helmet')
const logger = require('morgan')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(helmet({ contentSecurityPolicy: false }))  
app.use(cors())
app.disable('X-Powered-By') 
app.use(express.static(path.join(__dirname, 'client', 'build')))   
app.use('/api', AppRouter)
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))