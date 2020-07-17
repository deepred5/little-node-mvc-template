const env = process.env
const PORT = env.PORT || 8080
const NODE_ENV = env.NODE_ENV || 'prod'
const HOST_ADDRESS = env.HOST_ADDRESS || '0.0.0.0'

module.exports = {
  port: PORT,
  hostAddress: HOST_ADDRESS,
  nodeEnv: NODE_ENV,
  host: env.HOST,
}