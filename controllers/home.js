const { Controller } = require('little-node-mvc');

class Home extends Controller {
  async index() {
    await this.ctx.render('home', {
      title: 'home',
      users: [
        {
          name: 'deepred'
        },
        {
          name: 'cody'
        }
      ],
    });
  }

  async fetchList(ctx, next) {
    console.log(ctx.request.body);
    const data = await ctx.services.home.getList();
    ctx.body = data;
  }
}

module.exports = Home;