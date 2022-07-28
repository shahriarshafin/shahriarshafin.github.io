import Image from 'next/image';
import Project1 from '../assets/images/project1.png';
const ProjectCard = () => {
	return (
		<div className='max-w-[50rem] mx-auto w-full py-5 px-10 md:px-0'>
			<div className='flex justify-center md:justify-start'>
				<div className='indicator'>
					<div className='indicator-item indicator-middle indicator-center flex items-center justify-center ml-0 md:ml-[22.5rem]'>
						<div>
							<a
								href={'/'}
								target='_blank'
								rel='noopener noreferrer'
								className='mb-2 text-xl md:text-3xl font-bold tracking-widest md:text-right block'
							>
								RTX Server
							</a>
							<div className='md:text-right p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg text-sh-white w-80 text-xs md:text-base'>
								SMATA IS AN ALL-IN-ONE CLOUD-BASED SOLUTION, INTEGRATING
								MANAGEMENT, COMMUNICATION ACCOUNTING FUNCTIONS.
							</div>
							<div className='flex gap-5 my-2 justify-end px-2'>
								<span>React</span>
								<span>Tailwind</span>
								<span>Node</span>
							</div>
						</div>
					</div>

					<div className='w-96 md:w-[35rem] rounded-lg border-2 border-sh-blue relative scale-[.99] hover:scale-100 transition ease-in shadow-lg'>
						<a href={'/'} target='_blank' rel='noopener noreferrer'>
							<Image
								className='rounded-lg opacity-25 md:opacity-50 hover:opacity-100 transition ease-in w-full h-full'
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
