import React from 'react';

function ResourceType(props) {
	const activeStyle = {
		backgroundColor: `#77c2e9`,
		color: `#fff`,
	};

	return (
		<div className="resourceType">
			<button
				name="websites"
				value="websites"
				style={
					props.resourceDisplayed == 'websites' ? activeStyle : null
				}
				onClick={(event) => {
					let { value } = event.target;
					props.setResourceDisplayed([value]);
				}}
			>
				Websites
			</button>
			<button
				name="books"
				value="books"
				style={props.resourceDisplayed == 'books' ? activeStyle : null}
				onClick={(event) => {
					let { value } = event.target;
					props.setResourceDisplayed([value]);
				}}
			>
				Books
			</button>
			<button
				name="youtube"
				value="youtube"
				style={
					props.resourceDisplayed == 'youtube' ? activeStyle : null
				}
				onClick={(event) => {
					let { value } = event.target;
					props.setResourceDisplayed([value]);
				}}
			>
				Youtube channels
			</button>
			<button
				name="podcasts"
				value="podcasts"
				style={
					props.resourceDisplayed == 'podcasts' ? activeStyle : null
				}
				onClick={(event) => {
					let { value } = event.target;
					props.setResourceDisplayed([value]);
				}}
			>
				Podcast
			</button>
		</div>
	);
}

export default ResourceType;
