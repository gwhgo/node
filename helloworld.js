var http = require('http');
// (callback function)
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World , Hello nodejs');
}).listen(7001);