import Link from 'next/link';
import { HiCursorClick } from 'react-icons/hi';
import { PinnedRepositories } from '../data/repositories';
import Heading from '../utils/Heading';
import RepoCard from '../utils/RepoCard';

const PinnedRepo = () => {
	return (
		<section>
			<Heading text='Pinned Repositories' />
			<div className='space-y-4 mt-3'>
				{PinnedRepositories.map((repo, index) => (
					<RepoCard key={index} {...repo} />
				))}
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
