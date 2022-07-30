import Image from 'next/image';
const ProjectCard = ({ leftAlign, image, title, des, tech1, tech2, tech3 }) => {
	return (
		<div
			className={
				leftAlign == true
					? 'flex justify-center md:justify-end'
					: 'flex justify-center md:justify-start'
			}
		>
			<article className='indicator'>
				<header
					className={
						leftAlign == true
							? 'indicator-item indicator-middle indicator-center flex items-center justify-center ml-0 md:-ml-[22.5rem]'
							: 'indicator-item indicator-middle indicator-center flex items-center justify-center ml-0 md:ml-[22.5rem]'
					}
				>
					<div>
						<a
							href={'/'}
							target='_blank'
							rel='noopener noreferrer'
							className={
								leftAlign == true
									? 'mb-2 text-xl md:text-3xl text-left md:text-left font-bold tracking-widest block'
									: 'mb-2 text-xl md:text-3xl text-left md:text-right font-bold tracking-widest block'
							}
						>
							{title}
						</a>
						<div
							className={
								leftAlign == true
									? 'text-left md:text-left text-xs md:text-base p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg w-80'
									: 'text-left md:text-right text-xs md:text-base p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg w-80'
							}
						>
							{des}
						</div>
						<div
							className={
								leftAlign == true
									? 'flex justify-start gap-5 p-2'
									: 'flex justify-end gap-5 p-2'
							}
						>
							<span>{tech1}</span>
							<span>{tech2}</span>
							<span>{tech3}</span>
						</div>
					</div>
				</header>

				<div className='w-96 md:w-[35rem] rounded-lg border-2 border-sh-blue relative scale-[.99] hover:scale-100 transition ease-in shadow-lg'>
					<a href={'/'} target='_blank' rel='noopener noreferrer'>
						<Image
							className='rounded-lg opacity-25 md:opacity-50 hover:opacity-100 transition ease-in w-full h-full'
							src={image}
							alt='project screenshot'
							objectFit='contain'
							draggable='false'
						/>
					</a>
				</div>
			</article>
		</div>
	);
};

export default ProjectCard;
