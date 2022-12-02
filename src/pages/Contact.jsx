import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import ContactMediaAndForm from '../components/contact-components/ContactMediaAndForm';
import Footer from '../components/Footer';

function Contact() {
	return (
		<div className="pageBody">
			<GlobalHeader />
			<ContactMediaAndForm />
			<Footer />
		</div>
	);
}

export default Contact;
