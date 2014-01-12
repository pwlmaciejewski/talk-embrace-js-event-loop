async = require('async');
async.series([
    function (cb) {
        console.log('call 1');
        setTimeout(function () {
            console.log('result 1');
            cb(null, 1);
        }, 1000)
    },
    function (cb) {
        console.log('call 2');
        setTimeout(function () {
            console.log('result 2');
            cb(null, 2);
        }, 500);
    }
], function (err, results) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(results);
});