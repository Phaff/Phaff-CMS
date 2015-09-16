"use strict";

const http = require('http');

const Counter = require('phaff');

var server = http.createServer((req, res) => {
    res.writeHead(200, {});
    res.write("");
    res.end();
});
server.listen(1337);