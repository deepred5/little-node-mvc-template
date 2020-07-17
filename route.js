const demo2 = require('./middlewares/dem2');

const routes = [
  {
    match: '/',
    controller: 'home.index'
  },
  {
    match: '/home',
    controller: 'home.index',
    middlewares: [demo2()]

  },
  {
    match: '/list',
    controller: 'home.fetchList',
    method: 'post'
  }
];


module.exports = routes;