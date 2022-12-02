import React from 'react';
import { podcasts } from '../../resources';
import ResourceItem from './ResourceItem';

function PodcastResources(props) {
	return (
		<div
			className="resourceItemsDisplay podcastResources"
			style={
				props.resourceDisplayed == 'podcasts'
					? { display: 'grid' }
					: { display: 'none' }
			}
		>
			{podcasts.map((item, index) => {
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

export default PodcastResources;
