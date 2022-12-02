import React from 'react'
import { youtube } from '../../resources';
import ResourceItem from './ResourceItem';

function YoutubeResources(props) {
  return (
		<div
			className="resourceItemsDisplay youtubeResources"
			style={
				props.resourceDisplayed == 'youtube'
					? { display: 'grid' }
					: { display: 'none' }
			}
		>
			{youtube.map((item, index) => {
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

export default YoutubeResources