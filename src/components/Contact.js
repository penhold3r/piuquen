import React from 'react'

const Contact = () => {
	return (
		<section className="contact py-3 px-1" id="contacto">
			<h2 className="contact__title text-color-primary">
				Esperamos
				<br />
				<em className="display text-color-secondary">tu contacto</em>
			</h2>

			<form className="contact__form">
				<div className="form-block">
					<input className="input" type="text" name="name" placeholder="Nombre" required />
				</div>
				<div className="form-block">
					<input className="input" type="email" name="email" placeholder="Email" required />
				</div>
				<div className="form-block">
					<textarea className="input msg" name="message" placeholder="Mensaje" required />
				</div>
				<input className="submit" type="submit" value="Enviar" />
			</form>
		</section>
	)
}

export default Contact
