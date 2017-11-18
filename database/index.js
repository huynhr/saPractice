const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/saPractice');

let db = mongoose.connection;

let testSchema = mongoose.Schema({
  text: String
});

let Test = mongoose.model('Test', testSchema);

const save = (data) => {
  var newTest = new Test({text: data});

  newTest.save((err, data) => {
    if (err) return console.err(err);
    console.log('saved!')
  })
}

const findAll = (callback) => {
  Test.find({}, (err, text) => {
    if (err) return `error can't find`
    callback(text)
  })
}

module.exports.save = save;
module.exports.find = findAll;