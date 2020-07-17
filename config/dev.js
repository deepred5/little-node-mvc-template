module.exports = {
	proxy: [
		{
			match: '/x/web-interface/*',
			config: {
				target: 'https://api.bilibili.com',
				changeOrigin: true,
				onProxyReq(proxyReq, req, res) {
					proxyReq.setHeader('referer', 'https://www.bilibili.com/'); // 防爬虫
				}
			}
		}
	]
}
