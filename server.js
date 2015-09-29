"use strict";

const fs = require('fs');
const path = require('path');

const Phaff = require('phaff');

let phaff = new Phaff();

Promise
    .all(
        [
            phaff.initConfig(),
            phaff.initServices()
        ]
    )
    .then(
        //() => phaff.config.readDirectory(path.join(__dirname, 'config'))
    )
    .then(
        () => phaff.getService('phaff/webserver')
    )
    .then(
        (server) => {
            console.log(server);
            fs.readdir(path.join(__dirname, 'controllers'), (err, files) => {
                files.forEach((file) => {
                    server.registerRoute(require(path.join(__dirname, 'controllers', file)));
                });
                server.listen(1337);
            });
        },
        (error) => {
            console.log(error);
        }
    );
