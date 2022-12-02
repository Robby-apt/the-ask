import React from 'react';
import HomeBio from './HomeBio';
import HomeVideo from './HomeVideo';

function HomeInfo() {
	return (
		<div className="homeInfo">
			<div className="homeInfoCover">
				<HomeBio />
				<HomeVideo />
			</div>
		</div>
	);
}

export default HomeInfo;
