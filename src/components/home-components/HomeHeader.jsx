import React from 'react';
import GlobalHeader from '../GlobalHeader';
import HeaderIntro from './HeaderIntro';
import HeaderTags from './HeaderTags';

function Header() {
	return (
		<header className="homeHeader">
			<GlobalHeader />
			<HeaderIntro />
			<HeaderTags />
		</header>
	);
}

export default Header;
