const express = require('express')
const parser = require('body-parser')
const app = express()
const Class = require('./db/models.js')
const cors = require('cors')

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())

app.get('/api/classes', (req, res) => {
  Class.find()
  .then((classes) => {
    res.json(classes)
  })
  .catch((err) => {
    console.log(err)
  })
})

// app.post('/api/goals', (req, res) => {
//   Goal.create(req.body)  
//     .then((goal) => {
//       res.json(goal)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
