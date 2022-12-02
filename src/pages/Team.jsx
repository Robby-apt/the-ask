import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import TeamMembersSlide from '../components/team-components/TeamMembersSlide';
import Footer from '../components/Footer';

function Team() {
	return (
		<div className="pageBody">
			<GlobalHeader />
			<TeamMembersSlide />
			<Footer />
		</div>
	);
}

export default Team;
