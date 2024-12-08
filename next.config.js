module.exports = {
	reactStrictMode: true,
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos/",
				port: "0",
				pathname: "**",
			},
		],
	},
};
