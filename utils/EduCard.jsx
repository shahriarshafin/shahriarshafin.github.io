import Image from 'next/image';

const EduCard = ({ institution, logo, degree, startDate, endDate }) => {
	return (
		<div className='flex items-center gap-3 p-4 bg-sh-dark-500 border-2 border-[#2D3748] rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'>
			<div className='h-16 w-16'>
				<Image
					className=''
					src={logo}
					alt='Picture of the author'
					objectFit='contain'
					draggable='false'
				/>
			</div>
			<div>
				<h3 className='text-xl font-bold'>{institution}</h3>
				<p>{degree}</p>
				<p className='text-sm'>
					<span>{startDate}</span> - <span>{endDate}</span>
				</p>
			</div>
		</div>
	);
};

export default EduCard;
