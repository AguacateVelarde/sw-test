const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer( app )
const PORT = process.env.PORT || 8889
const cors = require('cors')

app.use( cors() )
app.use( express.json() )



server.on('listening', () =>{
    console.log( `Server running on port ${ PORT }` )
})

server.listen( PORT )