import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Productos = () => {
	const { bombones, galletitas, helados, rellenos } = useStaticQuery(graphql`
		query {
			bombones: file(name: { eq: "productos-bombones" }) {
				name
				childImageSharp {
					fluid(maxWidth: 900) {
						src
						...GatsbyImageSharpFluid
					}
				}
			}

			galletitas: file(name: { eq: "productos-galletitas" }) {
				name
				childImageSharp {
					fluid(maxWidth: 900) {
						src
						...GatsbyImageSharpFluid
					}
				}
			}

			helados: file(name: { eq: "productos-helados" }) {
				name
				childImageSharp {
					fluid(maxWidth: 900) {
						src
						...GatsbyImageSharpFluid
					}
				}
			}

			rellenos: file(name: { eq: "productos-rellenos" }) {
				name
				childImageSharp {
					fluid(maxWidth: 900) {
						src
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<section className="products" id="productos">
			<h2 className="products__title text-color-primary">
				Productos
				<br />
				<em className="display text-color-secondary">y más</em>
			</h2>

			<div className="products__intro">
				Materias primas para heladería, confitería y chocolatería además todo el asesoramiento
				para que tus producciones sean únicas.
			</div>

			<div className="products__gallery">
				<div className="product-img" data-aos="flip-up">
					<Img className="gimage" fluid={bombones.childImageSharp.fluid} alt={bombones.name} />
				</div>
				<div className="product-img" data-aos="flip-up">
					<Img
						className="gimage"
						fluid={galletitas.childImageSharp.fluid}
						alt={galletitas.name}
					/>
				</div>
				<div className="product-img" data-aos="flip-up">
					<Img className="gimage" fluid={rellenos.childImageSharp.fluid} alt={rellenos.name} />
				</div>
				<div className="product-img" data-aos="flip-up">
					<Img className="gimage" fluid={helados.childImageSharp.fluid} alt={helados.name} />
				</div>
			</div>
		</section>
	)
}

export default Productos
