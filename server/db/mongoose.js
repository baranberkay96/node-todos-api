var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongoosePromise = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {
  useMongoClient: true,
  /* other options */
});

module.exports = {mongoosePromise};
