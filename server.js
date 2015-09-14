"use strict";

const http = require('http');

const Phaff = require('phaff');

var server = http.createServer((req, res) => {
    res.writeHead(200, {});
    res.write(Phaff.hello_world());
    res.end();
});
server.listen(1337);