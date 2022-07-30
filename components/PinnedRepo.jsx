import Link from 'next/link';
import { HiCursorClick } from 'react-icons/hi';
import Heading from '../utils/Heading';
import RepoCard from '../utils/RepoCard';

const repoInfo = [
	{
		title: 'Create professional portfolio website with Nextjs and ChakraUI',
		stars: '450',
		folks: '330',
		url: 'http://nextjs.org/learn/basics/first-next-app',
		date: '21st June 2021',
		des: 'Currently, Im learning Nextjs and Typescript And for learning perspective I decided to rebuilt my',
	},
	{
		title: 'Create professional portfolio website with Nextjs and ChakraUI',
		stars: '1,0',
		folks: '75',
		url: 'http://nextjs.org/learn/basics/first-next-app',
		date: '21st June 2021',
		des: 'Currently, Im learning Nextjs and Typescript And for learning perspective I decided to rebuilt my',
	},
	{
		title: 'Create professional portfolio website with Nextjs and ChakraUI',
		stars: '1,0',
		folks: '75',
		url: 'http://nextjs.org/learn/basics/first-next-app',
		date: '21st June 2021',
		des: 'Currently, Im learning Nextjs and Typescript And for learning perspective I decided to rebuilt my',
	},
];

const PinnedRepo = () => {
	return (
		<section>
			<Heading text='Pinned Repositories' />
			<div className='space-y-4 mt-3'>
				{repoInfo.map((items, index) => {
					return <RepoCard key={index} {...items} />;
				})}
			</div>
			<div className='flex justify-center'>
				<Link href='/open-source'>
					<a className='gap-2 text-sh-blue hover:text-sh-blue-500 text-base mt-10 transition ease-in w-auto flex justify-center'>
						<p>More Repositories</p>
						<HiCursorClick className='text-xl inline-block' />
					</a>
				</Link>
			</div>
		</section>
	);
};

export default PinnedRepo;
