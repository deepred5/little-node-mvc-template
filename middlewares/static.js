const static = require('koa-static');
const path = require('path');

module.exports = static(path.resolve(__dirname, '../static'), { maxAge: 60 * 1000 })