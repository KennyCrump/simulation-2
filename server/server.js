require('dotenv').config()
const massive = require('massive')
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller.js')

const app = express()

app.use(bodyParser.json())
// app.use() session goes here

app.use(express.static(__dirname + '/../build'))
// ^^ "npm run build" before making static ^^


app.get('/api/houses', ctrl.readAll)
app.post('/api/house', ctrl.create)
app.delete('/api/house/:id', ctrl.delete)

PORT = process.env.SERVER_PORT


massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(PORT, () => console.log(`Port is open on port ${PORT}`))
})





