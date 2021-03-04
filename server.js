const express = require('express')
const helmet = require('helmet')
const recipesRouter = require('./api/recipes-router')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', ( req, res ) => {
    res.json({
        message: "hi there!"
    })
} )
server.use('/api', recipesRouter)

module.exports = server