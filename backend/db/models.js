const mongoose = require('./connection.js')

const ClassSchema = new mongoose.Schema ({
  id: Number,
  title: String,
  subjCode: String,
  crseNum: String,
  order: Number,
  prereqs: [],
  term: Number
})

module.exports= mongoose.model("Class", ClassSchema)
