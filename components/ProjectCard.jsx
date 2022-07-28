import Image from 'next/image';
import Project1 from '../assets/images/project1.png';
const ProjectCard = () => {
	return (
		<div className='max-w-3xl mx-auto w-full py-3 px-10 md:px-0'>
			{/* <div className='bg-zinc-500 flex'>
				<div className=''>
					<h2 className='mb-2 text-3xl font-bold tracking-widest inline-block'>
						Shahriar
					</h2>
					<div className='p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg text-sh-white h-32 w-80'>
						SMATA IS AN ALL-IN-ONE CLOUD-BASED SOLUTION, INTEGRATING MANAGEMENT,
						COMMUNICATION ACCOUNTING FUNCTIONS.
					</div>
					<div className='flex gap-5'>
						<span>react</span>
						<span>rteact</span>
						<span>react</span>
					</div>
				</div>
				<div className='bg-slate-400'>
					<div className=''>
						<Image
							src={Project1}
							alt='Picture of the author'
							// layout='fill'
							objectFit='contain'
						/>
					</div>
				</div>
			</div> */}

			{/* test */}
			{/* <div className='flex justify-center items-center'> */}
			<div className='indicator'>
				<div className='hidden md:block'>
					<div className='indicator-item indicator-middle flex items-center justify-center'>
						<div>
							<h2 className='mb-2 text-3xl font-bold tracking-widest text-right'>
								Smata House
							</h2>
							<div className='text-right p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg text-sh-white w-80'>
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
				</div>

				<div className='w-96 md:w-[35rem]'>
					<div className='rounded-lg border-[3px] border-sh-blue relative scale-[.99] hover:scale-100 transition ease-in shadow-lg'>
						<Image
							className='rounded-lg opacity-50 hover:opacity-100 transition ease-in'
							src={Project1}
							alt='Picture of the author'
							objectFit='contain'
						/>
					</div>
				</div>
			</div>
			{/* </div> */}
			{/* test */}
		</div>
	);
};

export default ProjectCard;
