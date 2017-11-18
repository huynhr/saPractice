const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const save = require('../database/index.js')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/public/'))

app.post('/api/post', (req, res) => {
  console.log(req.body)
  save.save(req.body.message)
  res.send('successful!')
});

app.get('/api/get', (req, res) => {
  save.find((text) => {
    res.send(text);
  })
})

app.listen(3000, () => console.log('Listening on port 3000!'))