var base = require("./config/base");
var node_env = base.nodeEnv;

module.exports = Object.assign({}, base, require(`./config/${node_env}`));