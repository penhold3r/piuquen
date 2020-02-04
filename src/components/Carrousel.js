import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-styled-carousel'
import Img from 'gatsby-image'

const Carrousel = () => {
	const {
		allFile: { edges: logos }
	} = useStaticQuery(graphql`
		query {
			allFile(filter: { relativeDirectory: { eq: "brands" } }) {
				edges {
					node {
						id
						name
						childImageSharp {
							fluid(maxWidth: 300) {
								src
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	return (
		<section className="carrousel">
			<Slider
				autoSlide={true}
				pauseOnMouseOver={false}
				responsive={[
					{ breakPoint: 1, cardsToShow: 3 },
					{ breakPoint: 800, cardsToShow: 4 },
					{ breakPoint: 1000, cardsToShow: 6 }
				]}
				showArrows={false}
				showDots={false}
			>
				{logos &&
					logos.map(({ node: { id, name, childImageSharp } }) => {
						return (
							<Img
								key={id}
								className="brand-logo"
								fluid={childImageSharp.fluid}
								alt={name}
								title={name}
							/>
						)
					})}
			</Slider>
		</section>
	)
}

Carrousel.propTypes = {
	data: PropTypes.array
}

export default Carrousel
