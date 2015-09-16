"use strict";

const http = require('http');

const Counter = require('phaff');

var counter = new Counter(1);
var server = http.createServer((req, res) => {
    counter.increment();
    var val = counter.get();
    res.writeHead(200, {});
    res.write(val + "");
    res.end();
});
server.listen(1337);