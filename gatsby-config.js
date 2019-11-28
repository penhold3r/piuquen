const globImporter = require('node-sass-glob-importer')

module.exports = {
	siteMetadata: {
		title: `Piuquen Chocolates`,
		description: `Piuquen Chocolates`,
		author: `@piuquen`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8,
				importer: globImporter()
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `piuquen-schoclotaes`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-offline`
	]
}
