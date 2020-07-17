const env = process.env
const httpPort = env.PORT || 8080
const NODE_ENV = env.NODE_ENV || 'prod'
const pkg = require('../package.json')
module.exports = {
	port: httpPort,
	hostAddress: env.HOST_ADDRESS || '0.0.0.0',
	nodeEnv: NODE_ENV,
	log: {
		projectName: pkg.name,
		fileName: `/home/logs/${pkg.name}/logstash/`
	}
}
