"use strict";

const fs = require('fs');
const path = require('path');

const Phaff = require('phaff');

let phaff = new Phaff();

phaff.initServices()
    .then(
        () => phaff.initConfig()
    )
    .then(
        () => phaff.getService('Phaff/Config')
    )
    .then(
        (config) => config.readDirectory(path.join(__dirname, 'config'))
    )
    .then(
        (config) => phaff.getService('Phaff/Config')
    )
    .then(
        () => phaff.getService('Phaff/WebServer')
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
