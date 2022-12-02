const websites = [
	{
		title: 'Recovering from Religion',
		source: 'https://www.recoveringfromreligion.org/',
		img: 'https://i0.wp.com/holykoolaid.com/wp-content/uploads/2019/06/recovering-from-religion.png?w=1000&ssl=1',
		description: `Have you recently left your faith, and you're not sure where to turn next? Or perhaps, you've been an atheist for a while, but are still recovering from the harm caused by religion? Check out Recovering from Religion`,
	},
	{
		title: 'Talk Origins',
		source: 'http://www.talkorigins.org/indexcc/',
		img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FdUDSjjbajhrJyMoRVReVSPwqJqlYj-ncLaMMdKb_xvo.jpg%3Fauto%3Dwebp%26s%3D5dc71dcb450cf9e97417f7eab8c7036b38306fda&f=1&nofb=1&ipt=a95fe1421188e2b554b69bf72323196a440471346ce0ae4271f0e862b820f097&ipo=images',
		description: `An index to claims made by creationists and their rebuttals from a scientific perspective.`,
	},
	{
		title: 'Center for Inquiry',
		source: 'https://centerforinquiry.org/',
		img: 'https://i0.wp.com/holykoolaid.com/wp-content/uploads/2019/06/center-for-inquiry.png?w=1000&ssl=1',
		description: `Need help debunking paranormal, superstitious, or supernatural claims? Check out the Center for Inquiry.`,
	},
	{
		title: 'The Clergy Project',
		source: 'http://clergyproject.org/',
		img: 'https://i0.wp.com/holykoolaid.com/wp-content/uploads/2019/06/the-clergy-project-compressed.png?w=1000&ssl=1',
		description: `Are you a pastor, missionary, or minister who is stuck in the pulpit, but no longer believes. The clergy project offers anonymous support and resources to help you break free from ministry on your terms.`,
	},
	{
		title: 'Dare to doubt',
		source: 'https://www.daretodoubt.org/',
		img: '/images/resources/dtd.png',
		description: `Questioning faith takes courage. Leaving your religion can be life-shattering. You may be experiencing varying stages of doubt, crisis, and recovery. You are not alone.`,
	},
];

const books = [
	{
		title: 'The God Delusion',
		source: 'https://books.feedvu.com/nonscrolablepdf/the-god-delusion-pdf-richard-dawkins-2.html',
		img: 'https://booksvooks.com/assets/images/book/the-god-delusion-pdf-richard-dawkins.webp',
		description: `A preeminent scientist -- and the world's most prominent atheist -- asserts the irrationality of belief in God and the grievous harm religion has inflicted on society, from the Crusades to 9/11.`,
	},
	{
		title: 'God is not Great',
		source: 'https://books.feedvu.com/nonscrolablepdf/god-is-not-great-how-religion-poisons-everything-pdf-1.html',
		img: 'https://booksvooks.com/assets/images/book/god-is-not-great-how-religion-poisons-everything-pdf.webp',
		description: `In the tradition of Bertrand Russell's Why I Am Not a Christian and Sam Harris' recent best-seller, The End of Faith, Christopher Hitchens makes the ultimate case against religion.`,
	},
	{
		title: 'Morality',
		source: 'https://books.feedvu.com/fullbook/mortality-pdf-christopher-hitchens-1.html',
		img: 'https://booksvooks.com/assets/images/book/mortality-pdf-christopher-hitchens.webp',
		description: `Mortality is a beautiful novel written by the famous author Christopher Hitchens. The book is perfect for those who wants to read philosophy, autobiography books.`,
	},
	{
		title: 'Free Will',
		source: 'https://books.feedvu.com/nonscrolablepdf/free-will-pdf-sam-harris-1.html',
		img: 'https://booksvooks.com/assets/images/book/free-will-pdf-sam-harris.webp',
		description: `Free Will is a beautiful novel written by the famous author Sam Harris. The book is perfect for those who wants to read psychology, philosophy books.`,
	},
	{
		title: 'The Origin of Species',
		source: 'https://books.feedvu.com/nonscrolablepdf/the-origin-of-species-pdf-charles-darwin.html',
		img: 'https://booksvooks.com/assets/images/book/the-origin-of-species-pdf-charles-darwin.webp',
		description: `The Origin of Species is a beautiful novel written by the famous author Charles Darwin. The book is perfect for those who wants to read classics, science books.`,
	},
	{
		title: 'Faith vs Fact: Why Science and Religion are Incompatible',
		source: 'https://books.feedvu.com/fullbook/faith-versus-fact-why-science-and-religion-are-incompatible-pdf-2.html',
		img: 'https://booksvooks.com/assets/images/book/faith-versus-fact-why-science-and-religion-are-incompatible-pdf.webp',
		description: `Faith Versus Fact: Why Science and Religion are Incompatible is a beautiful novel written by the famous author Jerry A. Coyne.`,
	},
];

const youtube = [
	{
		title: ' Atheists Hangout',
		source: 'https://www.youtube.com/channel/UCBPLMRPHyxsxdn55S9V1buw',
		img: '/images/ask-logo-draft.jpg',
		description:
			'Atheists Hangout is a channel under the umbrella of ATHEISTS SOCIETY OF KENYA that comprises of a group of Atheists, Agnostics, Theists, Humanists, Skeptics, Secularists, and Free Thinkers among others',
	},
	{
		title: 'Tuongee Na Kilonzi',
		source: 'https://www.youtube.com/channel/UCjEb9TMIInI7rHwvXjEfh8Q',
		img: '/images/team-members/adiel-1.jpg',
		description: `An ex-JW's`,
	},
	{
		title: 'The Atheist Experience',
		source: 'https://www.youtube.com/@TheAtheistExperience',
		img: 'https://yt3.ggpht.com/ytc/AMLnZu_r-J2NYg_yOywKD7lUn3gacA1sBaTOYzu5tQ7axw=s88-c-k-c0x00ffffff-no-rj',
		description:
			'The Atheist Experience is a weekly show in Austin, Texas geared at a non-atheist  and atheist audience.',
	},
	{
		title: 'Matt Dillahunty',
		source: 'https://www.youtube.com/@SansDeity',
		img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.42iIateWriSoERQ3YqRI4QAAAA%26pid%3DApi&f=1&ipt=94315dd3b4089f8017232179044c4a6eff545ace876d88301c09efe5b5a62a08&ipo=images',
		description:
			'Lecturer, Debater, magician, gamer, anti-religionist and more',
	},
	{
		title: 'Forrest Valkai',
		source: 'https://www.youtube.com/@RenegadeScienceTeacher',
		img: 'https://yt3.ggpht.com/ytc/AMLnZu9USkeQgXmhSX6CtuYMhUd6dQE_4xWrzVfFFlr8=s88-c-k-c0x00ffffff-no-rj',
		description:
			'Meet Forrest Valkai - Scientist, Educator, Activist, and Youth Speaker.',
	},
	{
		title: 'Aron Ra',
		source: 'https://www.youtube.com/@AronRa',
		img: 'https://yt3.ggpht.com/ytc/AMLnZu8ChKqMB7U_segVdDJyLEhDcUWoZYWJIkZWy_nk=s88-c-k-c0x00ffffff-no-rj',
		description: `Aron Ra is an activist trying to promote science specifically and education in general. He can reach the grass roots audience I'm aiming for, and give them the edge in their next argument over science vs religious extremism.`,
	},
	{
		title: 'Professor Dave Explains',
		source: 'https://www.youtube.com/@ProfessorDaveExplains',
		img: 'https://yt3.ggpht.com/ytc/AMLnZu9AJxW0n6pOMJZhb8JbXr2p2Fu868osUNhJoMomgQ=s88-c-k-c0x00ffffff-no-rj',
		description:
			'This channel is for anyone who just wants to know more about the world and how things work. The goal is to increase science literacy in our society.',
	},
];

const podcasts = [
	{
		title: 'Recovering from Religion',
		source: 'https://open.spotify.com/show/4scB8HYMpWT5zXIWzONTFL?si=54ff5987b7284eeb',
		img: 'https://i0.wp.com/holykoolaid.com/wp-content/uploads/2019/06/recovering-from-religion.png?w=1000&ssl=1',
		description: `Have you recently left your faith, and you're not sure where to turn next? Or perhaps, you've been an atheist for a while, but are still recovering from the harm caused by religion? Check out Recovering from Religion`,
	},
	{
		title: 'The Atheist Experience Podcast',
		source: 'https://open.spotify.com/show/770WPA1HnBVJ3b2gzliMDJ?si=36679bee63e14258',
		img: 'https://yt3.ggpht.com/ytc/AMLnZu_r-J2NYg_yOywKD7lUn3gacA1sBaTOYzu5tQ7axw=s88-c-k-c0x00ffffff-no-rj',
		description:
			'The Atheist Experience is a weekly show in Austin, Texas geared at a non-atheist and atheist audience.',
	},
	{
		title: 'The Thinking Atheist',
		source: 'https://open.spotify.com/show/4mVMP5yGBAZU6zVHLLiiKK?si=ef652c3c50fd485a',
		img: 'https://d3wo5wojvuv7l.cloudfront.net/t_rss_itunes_square_1400/images.spreaker.com/original/1891bcd660fa80f4abded2d82fc7dd1a.jpg',
		description:
			'Seth Andrews, a former Christian broadcaster and believer for 30 years, ultimately escaped the bonds of superstitious thinking to embrace the more satisfying explanations that science provides.',
	},
	{
		title: 'The Atheist Republic Voicemails',
		source: 'https://open.spotify.com/show/0cAG2UYv1nNXl4u3zeuIDO?si=7c42c574879743dc',
		img: 'https://www.atheistrepublic.com/sites/default/files/Atheist-Republic-Logo.png',
		description:
			'You have reached Atheist Republic Voicemails. God may not be listening to you, but the citizens of the Atheist Republic are.',
	},
	{
		title: 'Ex-Hindu Atheist',
		source: 'https://open.spotify.com/show/6y14Steb4xoEI40ZNQZIJx?si=56cdd3bd7fe74494',
		img: 'http://www.exhinduatheists.org/wp-content/uploads/2022/08/ExHinduAtheists-Org.png',
		description:
			'EXHA Organization promotes secular Rationalism Atheism values, and aims to reduce discrimination faced by those who leave Hinduism.',
	},
];

export { websites, books, youtube, podcasts };
