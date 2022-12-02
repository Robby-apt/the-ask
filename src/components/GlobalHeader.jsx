import React from 'react';
import ContactNav from './ContactNav';
import Navbar from './Navbar';

function GlobalHeader() {
	return (
		<header className="globalHeader">
			<ContactNav />
			<Navbar />
		</header>
	);
}

export default GlobalHeader;
