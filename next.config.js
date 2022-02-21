const webpack = require('webpack')

module.exports = {
	webpack(config, { isServer, buildId }) {
		const originalEntry = config.entry
		config.entry = async () => {
			const entries = await originalEntry()

			if (entries['main.js'] && !entries['main.js'].includes('./utils/polyfills.js')) {
				entries['main.js'].unshift('./utils/polyfills.js')
			}

			return entries
		}

		return config
	},
}
