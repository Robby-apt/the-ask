import React from 'react';

function ContactNav() {
	return (
		<div className="headerContact">
			<div className="phoneAndEmail">
				<div>
					<i className="fa-solid fa-mobile-screen-button" />
					<p>+254 7XX XXX XXX</p>
				</div>
				<div>
					<i className="fa-regular fa-envelope" />
					<p>atheist-society-kenya@gmail.com</p>
				</div>
			</div>
			<div className="socialMedia">
				<a
					href="#"
					target="_blank"
					rel="noreferrer"
					className="midLink"
				>
					<i className="fa-brands fa-whatsapp" />
				</a>
				<a href="#" target="_blank" rel="noreferrer">
					<i className="fa-brands fa-facebook-f" />
				</a>
				<a
					href="https://www.youtube.com/channel/UCBPLMRPHyxsxdn55S9V1buw"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa-brands fa-youtube" />
				</a>
			</div>
		</div>
	);
}

export default ContactNav;
