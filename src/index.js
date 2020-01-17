require('./environment')

const express = require('express')
const bodyParser = require('body-parser')
const {
    mongoConnect
} = require('../helpers/mongodb')

const app = express()

const router = require('./router')

app.use(bodyParser.json())
app.use(router)

mongoConnect(() => {
    app.listen(8088)
})