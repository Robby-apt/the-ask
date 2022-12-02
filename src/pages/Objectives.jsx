import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import ObjectiveItem from '../components/objectives-components/ObjectiveItem';
import objectives from '../objectives';
import Footer from '../components/Footer';

function Objectives() {
	return (
		<div className="pageBody">
			<GlobalHeader />
			<div className="objectivesDisplay">
				{objectives.map((item, index) => {
					return <ObjectiveItem key={index} title={item.title} />;
				})}
			</div>
			<Footer />
		</div>
	);
}

export default Objectives;
