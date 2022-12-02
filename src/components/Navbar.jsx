import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarHome() {
	const [isDropDownShowing, setDropDownShowing] = useState(false);

	return (
		<nav>
			<div className="brand">
				<Link to="/">
					<img
						src="/images/ask-logo-draft.jpg"
						alt="Logo"
						className="brandLogo"
					/>
					<p className="brandName">
						Atheist Society
						<br />
						of Kenya
					</p>
				</Link>
			</div>
			<div className="navLinks">
				<div className="linkItem">
					<Link to="/">Home</Link>
				</div>
				<div
					className="linkItem dropDown"
					onMouseOver={() => {
						setDropDownShowing(true);
					}}
					onMouseOut={() => {
						setDropDownShowing(false);
					}}
				>
					<p>
						About us{' '}
						<i className="fa-sharp fa-solid fa-chevron-down" />
					</p>
					<div
						className="dropdownItems"
						style={
							isDropDownShowing
								? { display: `flex` }
								: { display: `none` }
						}
					>
						<Link to={`/objectives`}>Objectives</Link>
						<Link to={`/team`}>Team</Link>
						<Link to={`/gallery`}>Gallery</Link>
					</div>
				</div>
				<div className="linkItem">
					<Link to="/news">News & Events</Link>
				</div>
				{/* <div className="linkItem">
					<Link to="/blog">Blog</Link>
				</div> */}
				<div className="linkItem">
					<Link to="/resources">Resources</Link>
				</div>
				<div className="linkItem">
					<Link to="/contact">Contact</Link>
				</div>
				<div className="linkItem">
					<Link to="/join">Join us</Link>
				</div>
			</div>
		</nav>
	);
}

export default NavbarHome;
