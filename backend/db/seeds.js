const Class = require('./models.js')
const classData = require('./data.json')

Class.remove({})
  .then(() => {
    Class.collection.insert(classData)
      .then((classes) => {
        console.log(classes)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
