import React from 'react';
import { websites } from '../../resources';
import ResourceItem from './ResourceItem';

function WebResources(props) {
	return (
		<div
			className="resourceItemsDisplay webResources"
			style={
				props.resourceDisplayed == 'websites'
					? { display: 'grid' }
					: { display: 'none' }
			}
		>
			{websites.map((item, index) => {
				return (
					<ResourceItem
						key={index}
						img={item.img}
						title={item.title}
						source={item.source}
						description={item.description}
					/>
				);
			})}
		</div>
	);
}

export default WebResources;
