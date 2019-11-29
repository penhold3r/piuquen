import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Specials = () => {
	const { file } = useStaticQuery(graphql`
		query {
			file(name: { eq: "packs" }) {
				name
				childImageSharp {
					fluid(maxWidth: 800) {
						src
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	const {
		name,
		childImageSharp: { fluid }
	} = file

	return (
		<section className="specials py-4 px-1">
			<h2 className="specials__title text-color-primary">
				Nuestros
				<br />
				<em className="display text-color-secondary">especiales</em>
			</h2>
			<div className="specials__content">
				<div className="content-text">
					<p>
						Chocolates para moldeo y cubre torta piuquén, cacao de exc elente calidad, pastas
						para saborizar helados y cremas, pulpas de frutas y una gran variedad de confites
						bañados.
					</p>
				</div>
				<Img className="content-image" fluid={fluid} alt={name} />
			</div>
		</section>
	)
}

export default Specials
