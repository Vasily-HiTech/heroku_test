const express = require('express')
const config = require('config')
const app = express()

app.get('/', (req, res) => {
    console.log("test passed!")
    
    res.send('welcome to test heroku')
})
app.listen(80)