let path = require('path')
let express = require('express')
let app = express()
let mainRouter = require('./mainRoutes')
let db = require('./db.js')

app.use(mainRouter)
let port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)

mainRouter.get('/database', function (req, res) {
// Make a query to the database
  db.pools
  // Run query
    .then((pool) => {
      return pool.request()
      // This is only a test query, change it to whatever you need
        .query('SELECT * FROM Persons')
    })
  // Send back the result
    .then(result => {
      console.log(result)
      res.send(result)
    })
  // If there's an error, return that with some description
    .catch(err => {
      res.send({
        Error: err
      })
    })
})
