import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiCursorClick } from 'react-icons/hi';
import { GITHUB_API_URL, GITHUB_USERNAME } from '../config';
import { featuredRepositories } from '../data/data';
import { Heading, RepoCard } from '../utils';

const PinnedRepo = () => {
	const [repositories, setRepositories] = useState([]);
	useEffect(() => {
		const fetchRepositoriesData = async () => {
			try {
				const reposData = await Promise.all(
					featuredRepositories.map(async (repoName) => {
						const response = await fetch(
							`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`
						);
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return await response.json();
					})
				);

				setRepositories(reposData);
			} catch (error) {
				console.error('Error fetching repository data:', error);
			}
		};

		fetchRepositoriesData();
	}, []);
	return (
		<section>
			<Heading text='Featured Repositories' />
			<div className='space-y-4 mt-3'>
				<RepoCard repos={repositories} />
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
