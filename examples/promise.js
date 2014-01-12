Promise = require('promise');

var add = function (a, b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(a + b);
		}, 1000);
	});
};

addPromise = add(1, 2);
addPromise.done(function (result) {
	console.log(result);
}, function (err) {
	throw err;
});