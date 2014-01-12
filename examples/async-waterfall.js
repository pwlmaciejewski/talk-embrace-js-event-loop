async = require('async');
async.waterfall([
    function (cb) {
        console.log('call 1');
        setTimeout(function () {
            console.log('result 1');
            cb(null, 1, 2);
        }, 1000)
    },
    function (one, two, cb) {
        console.log(one, two);
        console.log('call 2');
        setTimeout(function () {
            console.log('result 2');
            cb(null, 3);
        }, 500);
    }
], function (err, three) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(three);
});