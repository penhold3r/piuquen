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

	const [left, setLeft] = useState(0)
	const [blocks, setBlocks] = useState(null)
	const nav = useRef(null)
	const blocksRef = useRef(null)

	const handleScroll = e => {
		const index = [...e.target.parentNode.childNodes].indexOf(e.target)
		const btns = [...nav.current.childNodes]

		btns.forEach(btn => btn.classList.remove('active'))
		e.target.classList.toggle('active')

		setLeft(-index * 100)
	}

	useEffect(() => {
		setBlocks([...blocksRef.current.childNodes])
	}, [])

	console.log(blocks)

	return (
		<section className="specials py-4 px-1">
			<h2 className="specials__title text-color-primary">
				Nuestros
				<br />
				<em className="display text-color-secondary">especiales</em>
			</h2>
			<div className="specials__content">
				<div className="blocks-wrapper" style={{ left: `${left}%` }} ref={blocksRef}>
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
							fluid={bucket.childImageSharp.fluid}
							alt={bucket.name}
						/>
					</div>

					<div className="special-block">
						<div className="content-text">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis
								veritatis nostrum! Culpa, ab similique.
							</p>
						</div>
						<Img
							className="content-image"
							fluid={craft.childImageSharp.fluid}
							alt={craft.name}
						/>
					</div>

					<div className="special-block">
						<div className="content-text">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta assumenda
								ipsa.
							</p>
						</div>
						<Img
							className="content-image"
							fluid={whiteBox.childImageSharp.fluid}
							alt={whiteBox.name}
						/>
					</div>
				</div>
			</div>
			<div className="specials__nav" ref={nav}>
				{blocks &&
					blocks.map((block, i) => (
						<div
							key={i}
							className={i === 0 ? 'nav-bullet active' : 'nav-bullet'}
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
