import Description from '../utils/Description';
import Heading from '../utils/Heading';
import RepoCard from '../utils/RepoCard';

const repoInfo = [
	{
		title: 'vscode-settings',
		stars: '450',
		folks: '330',
		url: 'https://github.com/shahriarshafin',
		date: '21st June 2021',
		des: 'This repository contains the implementation of basic concepts of React ⚛️',
	},
	{
		title: 'softavia ',
		stars: '1,0',
		folks: '75',
		url: 'https://github.com/shahriarshafin',
		date: '21st June 2021',
		des: 'Softavia is a demo project for showcasing a software companys website portfolio',
	},
	{
		title: 'mini-react-projects',
		stars: '1,0',
		folks: '75',
		url: 'https://github.com/shahriarshafin',
		date: '21st June 2021',
		des: 'An AI-powered chatbot that will provide the university related information.',
	},
	{
		title: 'soft-ui',
		stars: '450',
		folks: '330',
		url: 'https://github.com/shahriarshafin',
		date: '21st June 2021',
		des: 'This repository contains the implementation of basic concepts of React ⚛️',
	},
];
const openSource = () => {
	return (
		<section>
			<Heading text='Open Source' />
			<Description text='This page lists some of the open source repositories I have published or contributed to.' />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>
				{repoInfo.map((items, index) => {
					return <RepoCard key={index} {...items} />;
				})}
			</div>
		</section>
	);
};

export default openSource;
