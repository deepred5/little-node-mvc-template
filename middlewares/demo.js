module.exports = () => {
  return async (context, next) => {
    console.log('自定义中间件');
    await next()
  }
}