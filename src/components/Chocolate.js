import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import icon from '../images/iso-logo.svg'

const Chocolate = () => {
	const { file } = useStaticQuery(graphql`
		query {
			file(name: { eq: "chocolate-bg" }) {
				name
				childImageSharp {
					fluid(maxWidth: 1300) {
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
		<section className="chocolate">
			<Img className="chocolate__bg-image" fluid={fluid} alt={name} />
			<div className="chocolate__text" data-aos="fade-up">
				<p>Una fiesta para tus sentidos</p>
				<div className="icon">
					<img src={icon} alt="" />
				</div>
			</div>
		</section>
	)
}

export default Chocolate
