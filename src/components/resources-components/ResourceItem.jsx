import React from 'react';

function ResourceItem(props) {
	return (
		<div className="resourceItem">
			<img src={props.img} alt={props.title} />
			<div className="details">
				<h1>{props.title}</h1>
				<p>{props.description}</p>
				<a
					href={props.source}
					target="_blank"
					rel="noreferrer noopener"
				>
					View
				</a>
			</div>
		</div>
	);
}

export default ResourceItem;
