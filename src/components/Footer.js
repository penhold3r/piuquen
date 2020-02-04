import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from '../components/Link'

const Footer = () => {
	const { file } = useStaticQuery(graphql`
		query {
			file(name: { eq: "contact-bg" }) {
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
		<footer className="site-footer bg-dark-grey">
			<Img className="site-footer__image" fluid={fluid} alt={name} />
			<div className="site-footer__contact-data py-3">
				<div className="contact-block">
					<FontAwesomeIcon className="fa" icon={['fas', 'home']} />
					<p>
						<Link to="https://goo.gl/maps/KTDKfuavPxJZHDRM6">
							Joaquín V. González 827, Dorrego, Guaymallén, Mendoza, Argentina (5519)
						</Link>
					</p>
				</div>
				<div className="contact-block">
					<FontAwesomeIcon className="fa" icon={['fas', 'phone-alt']} />
					<p>
						<Link to="tel:+542614313748">261 431 3748</Link>
					</p>
				</div>
				<div className="contact-block">
					<FontAwesomeIcon className="fa" icon={['fas', 'envelope']} />
					<p>
						<Link to="mailto:info@piuquenchocolates.com">info@piuquenchocolates.com</Link>
					</p>
				</div>
			</div>
			<div className="site-footer__social">
				<Link to="https://facebook.com" className="social-link mx-q-1" title="Facebook">
					<FontAwesomeIcon className="fa" icon={['fab', 'facebook-f']} />
				</Link>
				<Link to="https://instagram.com" className="social-link mx-q-1" title="Instagram">
					<FontAwesomeIcon className="fa" icon={['fab', 'instagram']} />
				</Link>
				<Link to="https://twitter.com" className="social-link mx-q-1" title="Twitter">
					<FontAwesomeIcon className="fa" icon={['fab', 'twitter']} />
				</Link>
				<Link
					to="https://wa.me/+542614313748/Hola"
					className="social-link mx-q-1"
					title="whatsapp"
				>
					<FontAwesomeIcon className="fa" icon={['fab', 'whatsapp']} />
				</Link>
			</div>
			<div className="site-footer__copy p-2 bg-color-dark-grey">
				Piuquén Chocolates &copy; {new Date().getFullYear()}
			</div>
		</footer>
	)
}

export default Footer
