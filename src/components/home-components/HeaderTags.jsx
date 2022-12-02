import React from 'react';
import { Link } from 'react-router-dom';

function HeaderTags() {
	return (
		<div className="headerTags">
			<div className="secondaryTag">
				<i className="fa-solid fa-arrow-right" />
				<Link to={'/objectives'}>Have a look at our objectives</Link>
			</div>

			<div className="primaryTag">
				<p>
					You are welcome to join a society of like-minded individuals
					<br />
					who value human rights and freedoms
				</p>
				<Link to={'/join'}>Join the society</Link>
			</div>

			<div className="secondaryTag">
				<i className="fa-solid fa-arrow-right" />
				<Link to={'/contact'}>
					Feel free to contact us with any query you may have
				</Link>
			</div>
		</div>
	);
}

export default HeaderTags;
