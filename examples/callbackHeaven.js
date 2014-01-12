callbackHeaven = function (fns, callback) {
    var results = [];
    var index = 0;
    var cb = function (err, result) {
        if (err) {
            callback(err);
            return;
        }
        results.push(result);
        index += 1;
        if (fns[index]) {
            fns[index].call(this, cb);
        } else {
            callback(null, results);
        }
    };
    fns[0].call(this, cb);
};

callbackHeaven([
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