import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import { HiCursorClick } from 'react-icons/hi';
const PinnedRepo = () => {
	return (
		<div className='max-w-3xl mx-auto w-full py-3 px-10 md:px-0 mt-10 space-y-4'>
			<h2 className='mb-2 text-3xl font-bold tracking-widest inline-block decoration-sh-white underline decoration-1 underline-offset-[12px]'>
				Pinned Repositories
			</h2>
			{[1, 2, 3].map((items, index) => {
				return (
					<>
						<div className='p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg text-sh-white hover:shadow-lg transition ease-in hover:-translate-y-2'>
							<div>
								<div className='flex justify-between items-center'>
									<a
										href='#'
										className='text-lg font-semibold inline-block mb-3 text-sh-blue hover:text-sh-white transition ease-in'
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
								</div>

								<p>21st June 2021</p>
								<p className=''>
									Currently, Im learning Nextjs and Typescript. And for learning
									perspective I decided to rebuilt my...
								</p>
							</div>
						</div>
					</>
				);
			})}
			<div className=' text-sh-blue text-base flex items-center justify-center'>
				<a href='#' className='flex items-center gap-2'>
					More Repositories <HiCursorClick className='text-lg' />
				</a>
			</div>
		</div>
	);
};

export default PinnedRepo;
