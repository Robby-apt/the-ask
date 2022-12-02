import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Objectives from '../pages/Objectives';
import Team from '../pages/Team';
import Gallery from '../pages/Gallery';
import News from '../pages/News';
import Blog from '../pages/Blog';
import Resources from '../pages/Resources';
import Contact from '../pages/Contact';
import Join from '../pages/Join';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/objectives" element={<Objectives />} />
			<Route path="/team" element={<Team />} />
			<Route path="/gallery" element={<Gallery />} />
			<Route path="/news" element={<News />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/resources" element={<Resources />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/join" element={<Join />} />
		</Routes>
	);
}

export default App;
