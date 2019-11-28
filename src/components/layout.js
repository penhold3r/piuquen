import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faHome, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import Header from './Header'
import Footer from './Footer'

import 'sanitize.css'
import '../styles/index.scss'

import opengraph from '../images/piuquen-og.png'
import faviconICO from '../images/favicon.ico'
import faviconPNG from '../images/favicon.png'

//library.add(fab, faHome, faEnvelope, faPhoneAlt)

const Layout = ({ title, children }) => {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`)

	const pageTitle = title ? `${title} - ${site.siteMetadata.title}` : site.siteMetadata.title
	const { author } = site.siteMetadata

	return (
		<>
			<Helmet
				htmlAttributes={{ lang: 'es' }}
				title={pageTitle}
				meta={[
					{
						property: 'og:image',
						content: opengraph
					},
					{
						name: 'twitter:image',
						content: opengraph
					},
					{
						name: 'description',
						content: site.siteMetadata.description
					},
					{
						property: 'og:description',
						content: site.siteMetadata.description
					},
					{
						name: 'twitter:description',
						content: site.siteMetadata.description
					},
					{
						property: 'og:title',
						content: pageTitle
					},
					{
						name: 'twitter:title',
						content: pageTitle
					},
					{
						name: 'twitter:creator',
						content: author
					},
					{
						property: 'og:url',
						content: 'https://piuquenchocolates.com/'
					},
					{
						name: 'twitter:site',
						content: 'https://piuquenchocolates.com/'
					},
					{
						property: 'og:type',
						content: 'Website'
					},
					{
						name: 'twitter:card',
						content: 'summary_large_image'
					},
					{
						name: 'keywords',
						content: 'chocolate, chocolates, confituras'
					}
				]}
				link={[
					{
						href: faviconICO,
						rel: 'shortcut icon',
						type: 'image/x-icon'
					},
					{
						href: faviconPNG,
						rel: 'shortcut icon',
						type: 'image/png',
						sizes: '32x32 192x192'
					}
				]}
			/>
			<Header siteTitle={pageTitle} />
			<main>{children}</main>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default Layout
