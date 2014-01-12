async = require('async');
_ = require('underscore');

var add = function (a, b, callback) {
  callback(null, a + b);
};

async.series([
  _.partial(add, 1, 2),
  _.partial(add, 3, 4)
], function (err, results) {
	console.log(results);
});