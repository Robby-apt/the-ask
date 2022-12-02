import React from 'react';
import { books } from '../../resources';
import ResourceItem from './ResourceItem';

function BookResources(props) {
	return (
		<div
			className="resourceItemsDisplay bookResources"
			style={
				props.resourceDisplayed == 'books'
					? { display: 'grid' }
					: { display: 'none' }
			}
		>
			{books.map((item, index) => {
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

export default BookResources;
