import Image from 'next/image';
import Project1 from '../assets/images/project2.png';
const ProjectCard = () => {
	return (
		<div className='max-w-[50rem] mx-auto w-full py-5 px-10 md:px-0'>
			<div className='flex justify-center md:justify-end'>
				<div className='indicator'>
					<div className='hidden md:block'>
						<div className='indicator-item indicator-middle indicator-start flex items-center justify-center'>
							<div>
								<a
									href={'/'}
									target='_blank'
									rel='noopener noreferrer'
									className='mb-2 text-3xl font-bold tracking-widest text-left block'
								>
									D.B Coin
								</a>
								<div className='text-left p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg text-sh-white w-80'>
									SMATA IS AN ALL-IN-ONE CLOUD-BASED SOLUTION, INTEGRATING
									MANAGEMENT, COMMUNICATION ACCOUNTING FUNCTIONS.
								</div>
								<div className='flex gap-5 my-2 justify-start px-2'>
									<span>React</span>
									<span>Tailwind</span>
									<span>Node</span>
								</div>
							</div>
						</div>
					</div>

					<div className='w-96 md:w-[35rem] rounded-lg border-2 border-sh-blue relative scale-[.99] hover:scale-100 transition ease-in shadow-lg'>
						<a href={'/'} target='_blank' rel='noopener noreferrer'>
							<Image
								className='rounded-lg opacity-50 hover:opacity-100 transition ease-in'
								src={Project1}
								alt='Picture of the author'
								objectFit='contain'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
