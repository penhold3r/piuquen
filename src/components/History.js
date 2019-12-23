import React from 'react'

const History = () => {
	return (
		<section className="history px-1 py-5" data-aos="fade-up" id="historia">
			<h2 className="history__title text-color-primary">
				Nuestra
				<br />
				<em className="display text-color-secondary">historia</em>
			</h2>

			<div className="history__content p-1">
				<p>
					La pasión por el chocolate es el alma de nuestro equipo de trabajo. así despierta la
					idea de que Piuquén esté presente en las dulzuras más deseadas como un helado, un
					alfajor o un bombón artesanal.
				</p>
			</div>

			<div className="history__about p-1" data-aos="fade-up">
				<h3 className="about-title m-none mb-1 text-color-accent">Conocenos</h3>
				<div className="about-text">
					<p className="text-color-primary m-none px-1 pb-1">
						<em>
							Gustavo, Marisa y Carina los une la familia y un proyecto soñado por los tres,
							el de fabricar chocolate. Cada uno con su impronta hacen que sus artículos se
							distingan y ocupen un lugar muy valorado por quienes lo sumaron a sus
							productos.
						</em>
					</p>
				</div>
			</div>
		</section>
	)
}

export default History
