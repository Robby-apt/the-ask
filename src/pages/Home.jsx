import React from 'react';
import HomeHeader from '../components/home-components/HomeHeader';
import HomeInfo from '../components/home-components/HomeInfo';
import Footer from '../components/Footer';

function Home() {
	return (
		<div className="pageBody">
			<HomeHeader />
			<HomeInfo />
			<Footer />
		</div>
	);
}

export default Home;
