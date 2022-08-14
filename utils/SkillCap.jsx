import Image from 'next/image';

const SkillCap = ({ name, logo }) => {
	return (
		<div className='flex items-center bg-sh-dark-500 border-2 border-sh-dark rounded-lg px-3 py-3 hover:shadow-lg transition-transform transform ease-in hover:scale-105 cursor-default'>
			<div className='relative h-6 w-6'>
				<Image
					src={logo}
					objectFit='contain'
					layout='fill'
					draggable={false}
					alt={name + ' logo'}
				/>
			</div>
			<h3 className='ml-2'>{name}</h3>
		</div>
	);
};

export default SkillCap;
