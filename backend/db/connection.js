const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/schedule_classes_db')

module.exports = mongoose
