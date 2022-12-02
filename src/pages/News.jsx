import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import NewsItem from '../components/news-components/NewsItem';
import Footer from '../components/Footer';
import news from '../news';

function News() {
	return (
		<div className="pageBody">
			<GlobalHeader />
			<div className="newsDisplay">
				{news.map((item, index) => {
					return (
						<NewsItem
							key={index}
							itemType={item.itemType}
							img={item.img}
							title={item.title}
							description={item.description}
							itemDate={item.itemDate}
							itemTime={item.itemTime}
							source={item.source}
						/>
					);
				})}
			</div>
			<Footer />
		</div>
	);
}

export default News;
