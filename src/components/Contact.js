import React, { useRef } from 'react'
import { submitFormData } from 'submit-form-data'

const Contact = () => {
	const form = useRef(null)

	console.log(form.current)

	const handleSubmit = e => {
		e.preventDefault()
		console.log(e.target)

		const settings = {
			dest: 'process_data.php',
			fields: '.input',
			successMsg: 'Mensaje enviado!',
			errorMsg: 'Hubo un error!',
			sending: 'Enviando...',
			reciever: 'hello@world-mail.com'
		}

		submitFormData(e.target, settings)
	}

	return (
		<section className="contact py-3 px-1" id="contacto">
			<h2 className="contact__title text-color-primary" data-aos="fade-in">
				Esperamos
				<br />
				<em className="display text-color-secondary">tu contacto</em>
			</h2>

			<form className="contact__form" ref={form} onSubmit={handleSubmit} data-aos="fade-up">
				<div className="form-block">
					<input className="input" type="text" name="name" placeholder="Nombre" required />
				</div>
				<div className="form-block">
					<input className="input" type="email" name="email" placeholder="Email" required />
				</div>
				<div className="form-block">
					<textarea className="input msg" name="message" placeholder="Mensaje" required />
				</div>
				<input className="submit bg-color-accent py-h-1 px-1" type="submit" value="Enviar" />
			</form>
		</section>
	)
}

export default Contact
