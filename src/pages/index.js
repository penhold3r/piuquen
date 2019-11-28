import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import History from '../components/History'
import Chocolate from '../components/Chocolate'
import Productos from '../components/Productos'

const IndexPage = () => (
	<Layout>
		<Hero />
		<History />
		<Chocolate />
		<Productos />
	</Layout>
)

export default IndexPage
