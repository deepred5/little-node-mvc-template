const env = process.env
const httpPort = env.PORT || 8080
const NODE_ENV = env.NODE_ENV || 'prod'

module.exports = {
  port: httpPort,
  hostAddress: env.HOST_ADDRESS || '0.0.0.0',
  nodeEnv: NODE_ENV,
  host: env.HOST,
}