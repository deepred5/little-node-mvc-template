module.exports = () => {
  return async (context, next) => {
    console.log('某个路由的中间件');
    await next()
  }
}