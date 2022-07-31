const Highlights = () => {
	return (
		<div className='p-4 bg-sh-dark-500 shadow-lg border-l-4 border-x-sh-blue rounded-sm text-sh-blue'>
			<h2 className='text-lg font-bold inline-block text-transparent bg-clip-text mb-3 bg-gradient-to-r from-sh-blue via-[#a855f7] to-[#ec4899]'>
				New year, new projects:
			</h2>
			<div className=''>
				<a
					href='#'
					className='flex items-center hover:text-sh-blue-500 transition ease-in'
				>
					<div className='rounded-full h-1.5 w-1.5 bg-sh-white mr-2'></div>
					ChakraUI TemplatesKart - UI updates NEW
				</a>
				<a
					href='#'
					className='flex items-center hover:text-sh-blue-500 transition ease-in'
				>
					<div className='rounded-full h-1.5 w-1.5 bg-sh-white mr-2'></div>
					TemplatesKart | Free Chakra UI Components and Projects
				</a>
				<a
					href='#'
					className='flex items-center hover:text-sh-blue-500 transition ease-in'
				>
					<div className='rounded-full h-1.5 w-1.5 bg-sh-white mr-2'></div>
					Started 2022 by updating portfolio website
				</a>
			</div>
		</div>
	);
};

export default Highlights;
