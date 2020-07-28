const fs = require('fs');
const path = require('path');

const file = fs.readFileSync('../exercises/modules/node/api.js', {encoding: 'utf-8'}).toString();

fs.writeFileSync('./lib.js', 'var me = "me"');

