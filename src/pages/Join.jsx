import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import JoinForm from '../components/join-components/JoinForm';
import Footer from '../components/Footer';

function Join() {
	return (
		<div className="pageBody">
			<GlobalHeader />
			<h1 className="joinHead">Become a member</h1>
			<p className="warning">
				The fields with an <span>*</span> are required
			</p>
			<JoinForm />
			<Footer />
		</div>
	);
}

export default Join;
