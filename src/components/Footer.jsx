import React from 'react';

function Footer() {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();

	return (
		<footer>
			<div className="footerSocials">
				<a href="#" target="_blank" rel="noreferrer">
					<i className="fa-brands fa-whatsapp" />
				</a>
				<a
					href="#"
					target="_blank"
					rel="noreferrer"
					className="midLink"
				>
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
			<p className="rights">
				Atheist Society Of Kenya © {currentYear} - All rights reserved
			</p>
		</footer>
	);
}

export default Footer;
