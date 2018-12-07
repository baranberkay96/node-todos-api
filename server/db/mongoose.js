var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongoosePromise = mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true,
  /* other options */
});

module.exports = {mongoosePromise};
