import React, { useState } from 'react';

function ContactForm() {
	const [contactInfo, setContactInfo] = useState({
		nameField: ``,
		emailField: ``,
		subjectField: ``,
		messageField: ``,
	});

	function handleChange(event) {
		let { name, value } = event.target;
		setContactInfo((prev) => {
			return { ...prev, [name]: value };
		});
	}

	return (
		<div className="contactForm">
			<form action="">
				<div className="nameInput">
					<label htmlFor="nameField">Name:</label>
					<input
						type="text"
						id="nameField"
						name="nameField"
						value={contactInfo.nameField}
						onChange={() => {
							handleChange();
						}}
					/>
				</div>
				<div className="emailInput">
					<label htmlFor="emailField">Email:</label>
					<input
						type="email"
						id="emailField"
						name="emailField"
						value={contactInfo.emailField}
						onChange={() => {
							handleChange();
						}}
					/>
				</div>
				<div className="subjectInput">
					<label htmlFor="subjectField">Subject:</label>
					<input
						type="text"
						id="subjectField"
						name="subjectField"
						value={contactInfo.subjectField}
						onChange={() => {
							handleChange();
						}}
					/>
				</div>
				<div className="messageInput">
					<label htmlFor="messageField">Message:</label>
					<textarea
						id="messageField"
						name="messageField"
						cols="30"
						rows="10"
						value={contactInfo.messageField}
						onChange={() => {
							handleChange();
						}}
					/>
				</div>
				<button type="submit">SEND</button>
			</form>
		</div>
	);
}

export default ContactForm;
