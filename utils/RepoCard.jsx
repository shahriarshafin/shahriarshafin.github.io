import { BiGitRepoForked, BiStar } from 'react-icons/bi';

const RepoCard = ({ title, stars, folks, date, des, url }) => {
	return (
		<div className='p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'>
			<article>
				<header className='flex justify-between items-center mb-2'>
					<a
						href={url}
						target='_blank'
						rel='noopener noreferrer'
						className='text-lg font-bold inline-block text-sh-blue hover:text-sh-blue-500 transition ease-in'
					>
						{title}
					</a>
					<div className='flex items-center gap-2'>
						<div className='flex items-center'>
							<BiStar />
							<span className='ml-1'>{stars}</span>
						</div>
						<div className='flex items-center'>
							<BiGitRepoForked />
							<span className='ml-1'>{folks}</span>
						</div>
					</div>
				</header>

				<p>{date}</p>
				<p>{des}</p>
			</article>
		</div>
	);
};

export default RepoCard;
