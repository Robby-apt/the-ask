import React from 'react';

function HomeVideo() {
	return (
		<div className="homeVideo">
			<iframe
				src="https://www.youtube.com/embed/fu2OxCajxqQ"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	);
}

export default HomeVideo;
