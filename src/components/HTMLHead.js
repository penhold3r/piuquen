import React from 'react'
import Helmet from 'react-helmet'

import opengraph from '../images/piuquen-og.png'
import faviconICO from '../images/favicon.ico'
import faviconPNG from '../images/favicon.png'

const HTMLHead = ({ title, description, author }) => {
	return (
		<Helmet
			htmlAttributes={{ lang: 'es' }}
			title={title}
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
					content: description
				},
				{
					property: 'og:description',
					content: description
				},
				{
					name: 'twitter:description',
					content: description
				},
				{
					property: 'og:title',
					content: title
				},
				{
					name: 'twitter:title',
					content: title
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
	)
}

export default HTMLHead
