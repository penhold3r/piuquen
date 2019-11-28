import React from 'react'

import heroImg from '../images/hero.jpg'

const Hero = () => {
	return (
		<section className="hero bg-dark-grey">
			<img src={heroImg} alt="" className="hero__image" />
			<div className="display hero__text text-color-light">
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
			</div>
		</section>
	)
}

export default Hero
