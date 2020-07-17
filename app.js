const { App } = require('little-node-mvc');
const routes = require('./route');
const middlewares = require('./middlewares');
const config = require('./config');

const app = new App({
  projectRoot: __dirname,
  routes,
  middlewares,
  config
});

const { port, hostAddress } = config;

app.listen(port, hostAddress, () => {
  console.log(`app start at: http://${hostAddress}:${port}`);
})