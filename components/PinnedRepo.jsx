import Link from 'next/link';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import { HiCursorClick } from 'react-icons/hi';
import Heading from '../utils/Heading';
const PinnedRepo = () => {
	return (
		<section>
			<Heading text='Pinned Repositories' />
			<div className='space-y-4'>
				{[1, 2, 3].map((items, index) => {
					return (
						<div
							key={index}
							className='p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'
						>
							<article>
								<header className='flex justify-between items-center'>
									<a
										href='#'
										className='text-lg font-semibold inline-block mb-3 text-sh-blue hover:text-sh-blue-500 transition ease-in'
									>
										Create professional portfolio website with Nextjs and
										ChakraUI
									</a>
									<div className='flex items-center gap-2'>
										<div className='flex items-center'>
											<BiStar />
											<span className='ml-1'>490</span>
										</div>
										<div className='flex items-center'>
											<BiGitRepoForked />
											<span className='ml-1'>26</span>
										</div>
									</div>
								</header>

								<p>21st June 2021</p>
								<p>
									Currently, Im learning Nextjs and Typescript. And for learning
									perspective I decided to rebuilt my...
								</p>
							</article>
						</div>
					);
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
