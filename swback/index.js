const express = require('express')
const http = require('http')
const path = require( 'path' )
const fs = require( 'fs')
const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8889
const cors = require('cors')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const rfs = require('rotating-file-stream')
const router = require( '@swback/api')

const logDirectory = path.join(__dirname, 'log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
const accessLogStream = rfs('access.log', {
    interval: '1d',
    path: logDirectory
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { stream: accessLogStream }))
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors())
app.use(express.json())

app.use( '/api/v1', router )

server.on('listening', () => {
    console.log(`Server running on port ${PORT}`)
})

server.listen(PORT)

module.exports = app
