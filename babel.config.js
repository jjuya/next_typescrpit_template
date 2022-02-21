module.exports = (api) => {
	api.cache(true)
	const presets = [
		[
			'next/babel',
			{
				'preset-env': {
					useBuiltIns: 'entry',
					targets: {
						browsers: ['last 2 versions', '>= 5% in KR'],
					},
					corejs: 3,
					// debug: true,
				},
			},
		],
	]

	const env = {
		development: {
			plugins: [
				[
					'dotenv-import',
					{
						moduleName: '@env',
						path: '.env',
					},
				],
				[
					'babel-plugin-styled-components',
					{ ssr: true, displayName: true, preprocess: false },
				],
			],
		},
		staging: {
			plugins: [
				[
					'dotenv-import',
					{
						moduleName: '@env',
						path: '.env.staging',
					},
				],
				[
					'babel-plugin-styled-components',
					{ ssr: true, displayName: true, preprocess: false },
				],
			],
		},
		production: {
			plugins: [
				[
					'dotenv-import',
					{
						moduleName: '@env',
						path: '.env.production',
					},
				],
				[
					'babel-plugin-styled-components',
					{ ssr: true, displayName: true, preprocess: false },
				],
			],
		},
	}

	const plugins = [
		['inline-react-svg'],
		[
			'dotenv-import',
			{
				moduleName: '@env',
				path: '.env',
				blacklist: null,
				whitelist: null,
				safe: false,
				allowUndefined: false,
			},
		],

		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true,
			},
		],
		['@babel/plugin-syntax-dynamic-import'],
		['@babel/plugin-proposal-optional-chaining'],
		['styled-components', { ssr: true, displayName: true, preprocess: false }],
	]

	return {
		presets,
		plugins,
		env,
	}
}
