import React, { useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Specials = () => {
	const { packs, bag, cans } = useStaticQuery(graphql`
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
			cans: file(name: { eq: "packs-cans" }) {
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

	const [left, setLeft] = useState(0)
	const nav = useRef(null)

	const handleScroll = e => {
		const index = [...e.target.parentNode.childNodes].indexOf(e.target)
		const btns = [...nav.current.childNodes]

		btns.forEach(btn => btn.classList.remove('active'))
		e.target.classList.toggle('active')

		setLeft(-index * 100)
	}

	console.log(packs, bag)

	return (
		<section className="specials py-4 px-1">
			<h2 className="specials__title text-color-primary">
				Nuestros
				<br />
				<em className="display text-color-secondary">especiales</em>
			</h2>
			<div className="specials__content">
				<div className="blocks-wrapper" style={{ left: `${left}%` }}>
					<div className="special-block active">
						<div className="content-text">
							<p>
								Chocolates para moldeo y cubre torta piuquén, cacao de excelente calidad.
							</p>
						</div>
						<Img
							className="content-image"
							fluid={packs.childImageSharp.fluid}
							alt={packs.name}
						/>
					</div>

					<div className="special-block">
						<div className="content-text">
							<p>
								Tambien en bolsa agranel (15kg) de chocolates para moldeo y cubre torta
								piuquén, cacao de excelente calidad.
							</p>
						</div>
						<Img className="content-image" fluid={bag.childImageSharp.fluid} alt={bag.name} />
					</div>

					<div className="special-block">
						<div className="content-text">
							<p>
								Pastas para saborizar helados y cremas, pulpas de frutas y una gran variedad
								de confites bañados.
							</p>
						</div>
						<Img
							className="content-image"
							fluid={cans.childImageSharp.fluid}
							alt={cans.name}
						/>
					</div>
				</div>
			</div>
			<div className="specials__nav" ref={nav}>
				<div className="nav-bullet active" onClick={handleScroll}>
					&bull;
				</div>
				<div className="nav-bullet" onClick={handleScroll}>
					&bull;
				</div>
				<div className="nav-bullet" onClick={handleScroll}>
					&bull;
				</div>
			</div>
		</section>
	)
}

export default Specials
