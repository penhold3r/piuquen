import React, { useEffect } from 'react'

import AOS from 'aos'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import History from '../components/History'
import Chocolate from '../components/Chocolate'
import Productos from '../components/Productos'

import 'aos/dist/aos.css'

const IndexPage = () => {
	useEffect(() => {
		console.log('ready')
		AOS.init()
	}, [])

	return (
		<Layout>
			<Hero />
			<History />
			<Chocolate />
			<Productos />
		</Layout>
	)
}

export default IndexPage
