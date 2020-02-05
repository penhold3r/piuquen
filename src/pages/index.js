import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import AOS from 'aos'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import HTMLHead from '../components/HTMLHead'
import SiteHeader from '../components/SiteHeader'
import Footer from '../components/Footer'

import Hero from '../components/Hero'
import History from '../components/History'
import Chocolate from '../components/Chocolate'
import Productos from '../components/Productos'
import Specials from '../components/Specials'
import Carrousel from '../components/Carrousel'
import Contact from '../components/Contact'

import 'sanitize.css'
import '../styles/index.scss'
import 'aos/dist/aos.css'

library.add(fab, faHome, faEnvelope, faPhoneAlt)

const IndexPage = () => {
	const {
		site: {
			siteMetadata: { title, description, author }
		}
	} = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`)

	useEffect(() => {
		console.log('ready')
		AOS.init({
			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 800, // values from 0 to 3000, with step 50ms
			easing: 'ease-in-out' // default easing for AOS animations
		})
	}, [])

	return (
		<>
			<HTMLHead title={title} description={description} author={author} />
			<SiteHeader siteTitle={title} />
			<main className="main">
				<Hero />
				<History />
				<Chocolate />
				<Productos />
				<Specials />
				<Carrousel />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default IndexPage
