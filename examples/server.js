var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile(__dirname + '/file.txt', function (err, text) {
        if (err) {
            res.writeHead('404');
            res.write('File not found');
            return res.end();
        }
        res.writeHead('200', {
            'Content-Type': 'text/plain'
        });
        res.write(text);
        res.end();
    });
});

server.listen(8002, function () {
    console.log('Server started on port 8002');
});