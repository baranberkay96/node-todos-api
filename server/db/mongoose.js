var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongoosePromise = mongoose.connect('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true,
  /* other options */
});

module.exports = {mongoosePromise};
