import React from 'react';

function NewsItem(props) {
	return (
		<div className="newsItem">
			<div className="itemType">{props.itemType}</div>
			<img src={props.img} alt={props.title} />
			<div className="newsDescription">
				<h1>{props.title}</h1>
				<p>{props.description}</p>
				<p className="dateAndTime">
					{props.itemDate}
					<br />
					{props.itemTime}
				</p>
				<a href={props.source}>Link</a>
			</div>
		</div>
	);
}

export default NewsItem;
