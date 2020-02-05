import React, { useState, useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Specials = () => {
	const { packs, bag, bucket, craft, whiteBox } = useStaticQuery(graphql`
		query {
			packs: file(name: { eq: "packs" }) {
				name
				childImageSharp {
					fluid(maxWidth: 800) {
						src
						...GatsbyImageSharpFluid
					}
				}
			}
			bag: file(name: { eq: "packs-bag" }) {
				name
				childImageSharp {
					fluid(maxWidth: 800) {
						src
						...GatsbyImageSharpFluid
					}
				}
			}
			bucket: file(name: { eq: "packs-bucket" }) {
				name
				childImageSharp {
					fluid(maxWidth: 800) {
						src
						...GatsbyImageSharpFluid
					}
				}
			}
			craft: file(name: { eq: "packs-craft" }) {
				name
				childImageSharp {
					fluid(maxWidth: 800) {
						src
						...GatsbyImageSharpFluid
					}
				}
			}
			whiteBox: file(name: { eq: "packs-white-box" }) {
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

	const blocks = [
		{
			image: packs,
			text: 'Chocolates para moldeo y cubre torta piuquén, cacao de excelente calidad.'
		},
		{
			image: bag,
			text:
				'Tambien en bolsa agranel (15kg) de chocolates para moldeo y cubre torta Piuquén, cacao de excelente calidad.'
		},
		{
			image: bucket,
			text:
				'Pastas para saborizar helados y cremas, pulpas de frutas y una gran variedad de confites bañados.'
		},
		{
			image: craft,
			text:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tempora architecto aperiam voluptas accusantium.'
		},
		{
			image: whiteBox,
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, voluptatem.'
		}
	]

	const [left, setLeft] = useState(0)
	const nav = useRef(null)

	const handleScroll = e => {
		const index = [...e.target.parentNode.childNodes].indexOf(e.target)
		const btns = [...nav.current.childNodes]

		btns.forEach(btn => btn.classList.remove('active'))
		e.target.classList.toggle('active')

		setLeft(-index * 100)
	}

	return (
		<section className="specials py-4 px-1">
			<h2 className="specials__title text-color-primary">
				Nuestros
				<br />
				<em className="display text-color-secondary">especiales</em>
			</h2>
			<div className="specials__content">
				<div className="blocks-wrapper" style={{ left: `${left}%` }}>
					{blocks &&
						blocks.map((block, key) => (
							<div
								className={key === 0 ? 'special-block active' : 'special-block'}
								key={key}
							>
								<div className="content-text">
									<p>{block.text}</p>
								</div>
								<Img
									className="content-image"
									fluid={block.image.childImageSharp.fluid}
									alt={block.image.name}
								/>
							</div>
						))}
				</div>
			</div>
			<div className="specials__nav" ref={nav}>
				{blocks &&
					blocks.map((block, i) => (
						<div
							key={i}
							className={i === 0 ? 'nav-bullet active' : 'nav-bullet'}
							title={block.image.name}
							onClick={handleScroll}
						>
							&bull;
						</div>
					))}
			</div>
		</section>
	)
}

export default Specials
