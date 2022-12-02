import React, { useState } from 'react';
import GlobalHeader from '../components/GlobalHeader';
import ResourceType from '../components/resources-components/ResourceType';
import WebResources from '../components/resources-components/WebResources';
import BookResources from '../components/resources-components/BookResources';
import YoutubeResources from '../components/resources-components/YoutubeResources';
import PodcastResources from '../components/resources-components/PodcastResources';
import Footer from '../components/Footer';

function Resources() {
	const [resourceDisplayed, setResourceDisplayed] = useState('websites');
	return (
		<div className="pageBody">
			<GlobalHeader />
			<ResourceType
				resourceDisplayed={resourceDisplayed}
				setResourceDisplayed={setResourceDisplayed}
			/>
			<WebResources resourceDisplayed={resourceDisplayed} />
			<BookResources resourceDisplayed={resourceDisplayed} />
			<YoutubeResources resourceDisplayed={resourceDisplayed} />
			<PodcastResources resourceDisplayed={resourceDisplayed} />
			<Footer />
		</div>
	);
}

export default Resources;
