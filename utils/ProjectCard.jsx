import Image from 'next/image';
const ProjectCard = ({ leftAlign, image, title, des, tech }) => {
	return (
		<div
			className={
				leftAlign
					? 'flex justify-center md:justify-end'
					: 'flex justify-center md:justify-start'
			}
		>
			<article className='relative inline-flex max-w-max'>
				<header
					className={
						leftAlign
							? 'top-2/4 bottom-2/4 right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 absolute flex items-center justify-center ml-0 md:-ml-[22.5rem]'
							: 'top-2/4 bottom-2/4 right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 absolute flex items-center justify-center ml-0 md:ml-[22.5rem]'
					}
				>
					<div>
						<a
							href={'/'}
							target='_blank'
							rel='noopener noreferrer'
							className={
								leftAlign
									? 'mb-2 text-xl md:text-3xl text-left font-bold block md:text-left '
									: 'mb-2 text-xl md:text-3xl text-left font-bold block md:text-right '
							}
						>
							{title}
						</a>
						<div
							className={
								leftAlign
									? 'text-left text-xs md:text-base p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg w-80 md:text-left'
									: 'text-left text-xs md:text-base p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg w-80 md:text-right'
							}
						>
							{des}
						</div>
						<div
							className={
								leftAlign
									? 'flex gap-5 p-2 justify-start'
									: 'flex gap-5 p-2 justify-end'
							}
						>
							{tech.map((tech, index) => (
								<span key={index}>{tech}</span>
							))}
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
