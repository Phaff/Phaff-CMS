"use strict";
const path = require('path');
var action = (rails) => {
    rails.response.render(path.join(__dirname, '../views/home.html.twig'))
        .then((html) => {
            rails.response.writeHead(200, {});
            rails.response.write(html);
            rails.response.end();
        });
};
action['methods'] = ['GET'];
action['paths'] = ['/'];
var exports = module.exports = action;