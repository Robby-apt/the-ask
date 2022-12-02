import React from 'react';
import { Link } from 'react-router-dom';

function HomeBio() {
	return (
		<div className="homeBio">
			<p>
				The Atheist Society of Kenya is a community for all who lack
				belief in the existance of a god or gods.
				<br />
				<br />
				A place where rationality, skepticism and human rights are the
				order of the day, where freedom of
				<br />
				expression is appreciated not demonized and open and respectful
				sharing of information and opinions
				<br />
				is encouraged.
				<br />
				<br />
				We are of the opinion that it is important to question what it
				is you believe and why. Without questioning,
				<br />
				there is no way to know whether the beliefs you hold are true or
				false.
				<br />
				<br />
				We host debates and discussion every Friday and Sunday. We also
				have a youtube channel.
				<br />
				<br />
				Membership is open to anyone. We hope you find this community
				welcoming and inspiring.
			</p>

			<div className="homeBtns">
				<Link to={'/join'}>Join us</Link>
				<a
					href="https://www.youtube.com/channel/UCBPLMRPHyxsxdn55S9V1buw"
					target="_blank"
					rel="noopener noreferrer"
				>
					View channel
				</a>
			</div>
		</div>
	);
}

export default HomeBio;
