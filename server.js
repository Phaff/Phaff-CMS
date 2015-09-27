"use strict";

const fs = require('fs');
const path = require('path');

const Phaff = require('phaff');

let phaff = new Phaff();


phaff
    .readFrameworkConfig()
    .then(
        () => phaff.config.readDirectory(path.join(__dirname, 'config'))
    )
    .then(
        () => phaff.newServer()
    )
    .then(
        (server) => {
            fs.readdir(path.join(__dirname, 'controllers'), (err, files) => {
                files.forEach((file) => {
                    server.registerRoute(require(path.join(__dirname, 'controllers', file)));
                });
                server.listen(1337);
            });
        }
    );
