import React from 'react'

import { Link } from 'react-scroll'

import logo from '../images/piuquen-logo.svg'

const Header = ({ siteTitle }) => (
	<header className="main-header ">
		<div className="inner-header p-1">
			<h1 className="logo m-none" data-aos="fade-in">
				<img src={logo} alt={siteTitle} />
			</h1>
			<nav className="main-nav">
				<ul className="nav-list">
					<li className="nav-item m-h-1">
						<Link
							to=""
							duration={500}
							smooth={true}
							className="nav-item__link px-h-1 text-color-white"
						>
							Inicio
						</Link>
					</li>
					<li className="nav-item m-h-1">
						<Link
							to=""
							duration={500}
							smooth={true}
							className="nav-item__link px-h-1 text-color-white"
						>
							Historia
						</Link>
					</li>
					<li className="nav-item m-h-1">
						<Link
							to=""
							duration={500}
							smooth={true}
							className="nav-item__link px-h-1 text-color-white"
						>
							Productos
						</Link>
					</li>
					<li className="nav-item m-h-1">
						<Link
							to="inicio"
							duration={500}
							smooth={true}
							className="nav-item__link px-h-1 text-color-white"
						>
							Contacto
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Header
