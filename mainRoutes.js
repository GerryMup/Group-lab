let path = require('path')
let express = require('express')
let mainRouter = express.Router()

mainRouter.get('/', function (req, res) {
  res.send('First Page')
})

mainRouter.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

mainRouter.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

module.exports = mainRouter
