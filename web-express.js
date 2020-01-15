var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.get('/', function (req, res) {
    res.send("hello, I'm Express");
});


var server = app.listen(7001, function () {
    console.log("listen on http://zhipu.ai:7001");
});
