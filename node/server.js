const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const router = require('./app/routes/router')


const PORT = process.env.PORT || 3005


// Handle security
server.use(helmet.contentSecurityPolicy({
    userDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data:"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))

server.use('/', router)



server.listen(PORT, ()=> console.log(`the ${PORT} is use on album react`))