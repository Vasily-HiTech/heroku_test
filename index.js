const express = require('express')
const config = require('config')
const app = express()

app.get('/', (req, res) => {
    res.send('welcome to test heroku')
})
app.listen(80)