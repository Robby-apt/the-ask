import React from 'react';
import CarouselIndicator from './CarouselIndicator';
import TeamMember from './TeamMember';
import SlideButtons from './SlideButtons';
import teamMembers from '../../teamMembers';

function TeamMembersSlide() {
	return (
		<div
			id="carouselExampleDark"
			className="carousel carousel-dark slide"
			data-bs-ride="carousel"
		>
			<CarouselIndicator />

			<div className="carousel-inner">
				{teamMembers.map((item, index) => {
					return <TeamMember index={index} item={item} />;
				})}
			</div>

			<SlideButtons />
		</div>
	);
}

export default TeamMembersSlide;
