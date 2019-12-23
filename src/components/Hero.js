import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const useInterval = (callback, delay) => {
	const savedCallback = useRef()

	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	useEffect(() => {
		const tick = () => savedCallback.current()

		if (delay !== null) {
			let id = setInterval(tick, delay)
			return () => clearInterval(id)
		}
	}, [delay])
}

const Hero = () => {
	const {
		allFile: { nodes: images }
	} = useStaticQuery(
		graphql`
			query {
				allFile(filter: { relativeDirectory: { eq: "slider" } }) {
					nodes {
						name
						childImageSharp {
							fluid {
								src
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		`
	)
	const [currSlide, setCurrSlide] = useState(0)
	const [order, setNewOrder] = useState(images.map((e, i) => i))

	useInterval(() => {
		const slide = currSlide < images.length - 1 ? currSlide + 1 : 0

		let newOrder = [...order]
		let last = newOrder.pop()

		newOrder.unshift(last)

		setNewOrder(newOrder)
		setCurrSlide(slide)
	}, 4500)

	return (
		<section className="hero bg-dark-grey" id="inicio">
			<div className="hero__slider">
				{images.length &&
					images.map(({ id, name, childImageSharp }, index) => (
						<div
							key={index}
							className={currSlide === index ? 'slide active' : 'slide'}
							style={{ zIndex: currSlide === index ? images.length : order[index] }}
						>
							<Img fluid={childImageSharp.fluid} alt={name} title={name} />
						</div>
					))}
			</div>
			<div className="display hero__text text-color-light">
				<p>Crea sin límites, nosotros te aseguramos calidad!</p>
			</div>
		</section>
	)
}

export default Hero
