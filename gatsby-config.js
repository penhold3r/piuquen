const globImporter = require('node-sass-glob-importer')

module.exports = {
	siteMetadata: {
		title: `Piuquen Chocolates`,
		description: `Materias primas y asesoramiento en preoductos de chocolatería`,
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
				short_name: `piuquen`,
				start_url: `/`,
				background_color: `#573014`,
				theme_color: `#231f1e`,
				display: `standalone`,
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-offline`
	]
}
