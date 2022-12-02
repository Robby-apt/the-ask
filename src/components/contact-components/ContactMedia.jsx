import React from 'react';

function ContactMedia() {
	return (
		<div className="contactMedia">
			<div className="mediaContainer">
				<p className="socialIntro">
					Feel free to contact us with any issue or question
					<br />
					you may have abbout the society or atheism in general.
					<br />
					<br />
					We love hearing from you.
				</p>

				<p className="phoneAndEmail">
					Phone: +254 7XX XXX XXX
					<br />
					Email: atheist-society-kenya@gmail.com
				</p>

				<div className="socialMediaLinks">
					<a href="#" target="_blank" rel="noreferrer">
						<i className="fa-brands fa-facebook-f" />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noreferrer"
						className="midLink"
					>
						<i className="fa-brands fa-whatsapp" />
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
		</div>
	);
}

export default ContactMedia;
