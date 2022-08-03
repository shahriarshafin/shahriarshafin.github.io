import Image from 'next/image';
import { useState } from 'react';
import UserImg from '../assets/images/user.png';
import { GrettingList } from '../data/grettings';

const Hero = () => {
	const [arrItem, setArrItem] = useState(0);

	return (
		<section>
			<div className='flex items-center justify-center md:flex-row flex-col'>
				<div className='rounded-full border-[3px] border-sh-blue relative scale-95 hover:scale-100 transition ease-in shadow-lg'>
					<div className='h-44 w-44'>
						<Image
							className='rounded-full w-full h-full'
							src={UserImg}
							alt='ShafinAvatar'
							layout='fill'
							draggable='false'
						/>
					</div>
				</div>
				<div className='ml-0 md:ml-16'>
					<div className='relative group inline-block'>
						<h2
							onClick={() => {
								return setArrItem(
									arrItem >= GrettingList.length - 1 ? 0 : arrItem + 1
								);
							}}
							className='text-3xl font-bold animate-up mb-5 tracking-widest inline-block cursor-pointer select-none'
						>
							{GrettingList[arrItem].text}
							<span className='italic'>!</span>
						</h2>
						<div className='absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex'>
							<span className='relative z-10 p-2 text-xs leading-none text-sh-white whitespace-no-wrap bg-sh-dark shadow-lg rounded-md'>
								{GrettingList[arrItem].lang}
							</span>
							<div className='w-3 h-3 -mt-2 rotate-45 bg-sh-dark'></div>
						</div>
					</div>

					<h1 className='text-2xl font-normal leading-10'>
						I am{' '}
						<span className='font-bold tracking-widest animate-up cursor-default'>
							Shahriar Shafin
						</span>{' '}
						and Im a<br />
						No Stack Developer and an open source lover from Bangladesh
						<span className='mt-5 block'>
							This is my digital garden, where I write about the things Im
							working on and share what Ie learned.
						</span>
					</h1>
				</div>
			</div>
		</section>
	);
};

export default Hero;
