import React from 'react';

function TeamMember(props) {
	return (
		<div key={props.index} className={props.item.classList}>
			<div className="memberItem">
				<img
					src={props.item.memberImg}
					alt={props.item.memberName}
					style={props.item.customStyle}
				/>
				<div className="nameAndPosition">
					<h1>{props.item.memberName}</h1>
					<h2>{props.item.memberPosition}</h2>
				</div>
			</div>
		</div>
	);
}

export default TeamMember;
