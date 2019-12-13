import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import logo from '../images/piuquen-logo.svg'

const SiteHeader = ({ siteTitle }) => (
	<header className="main-header ">
		<div className="inner-header p-1">
			<h1 className="logo m-none" data-aos="fade-in">
				<img src={logo} alt={siteTitle} />
			</h1>
			<nav className="main-nav">
				<ul className="nav-list">
					<li className="nav-item m-h-1">
						<ScrollLink
							to="inicio"
							duration={500}
							smooth={true}
							className="nav-item__link p-h-1 text-color-white"
						>
							Inicio
						</ScrollLink>
					</li>
					<li className="nav-item m-h-1">
						<ScrollLink
							to="historia"
							duration={500}
							smooth={true}
							offset={-100}
							className="nav-item__link p-h-1 text-color-white"
						>
							Historia
						</ScrollLink>
					</li>
					<li className="nav-item m-h-1">
						<ScrollLink
							to="productos"
							duration={500}
							smooth={true}
							className="nav-item__link p-h-1 text-color-white"
						>
							Productos
						</ScrollLink>
					</li>
					<li className="nav-item m-h-1">
						<ScrollLink
							to="contacto"
							duration={500}
							smooth={true}
							className="nav-item__link p-h-1 text-color-white"
						>
							Contacto
						</ScrollLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
)

export default SiteHeader
