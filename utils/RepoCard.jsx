import React, { useEffect, useState } from 'react';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import RepoSkeleton from './RepoSkeleton';

const RepoCard = ({ repos }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (repos) {
			setTimeout(() => {
				setLoading(false);
			}, 1100);
		}
	}, [repos]);

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>
			{repos
				.sort((a, b) => {
					if (a.stargazers_count > b.stargazers_count) return -1;
					else if (a.stargazers_count < b.stargazers_count) return 1;
					return 0;
				})
				.map((item) => {
					return loading ? (
						<RepoSkeleton key={item.id} />
					) : (
						<div
							key={item.id}
							className='p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'
						>
							<article>
								<header className='flex justify-between items-center mb-2'>
									<a
										href={item.html_url}
										target='_blank'
										rel='noopener noreferrer'
										className='text-lg font-bold inline-block text-sh-blue hover:text-sh-blue-500 transition ease-in'
									>
										{item.name}
									</a>
									<div className='flex items-center gap-2 cursor-default'>
										<div className='flex items-center'>
											<BiStar />
											<span className='ml-1'>{item.stargazers_count}</span>
										</div>
										<div className='flex items-center'>
											<BiGitRepoForked />
											<span className='ml-1'>{item.forks_count}</span>
										</div>
									</div>
								</header>

								<p className='text-sh-white-500 overflow-hidden h-12'>
									{item.description}
								</p>

								<p className='flex gap-2 mt-3 cursor-default'>
									{item.topics.slice(0, 3).map((topic, index) => (
										<span
											className='bg-sh-dark rounded-3xl px-2 text-sm overflow-hidden truncate'
											key={index}
										>
											{topic}
										</span>
									))}
								</p>
							</article>
						</div>
					);
				})}
		</div>
	);
};

export default RepoCard;
