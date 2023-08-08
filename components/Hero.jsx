import Image from 'next/image';
import { useState } from 'react';
import { greetingList } from '../data/greetings';
import UserImg from '../public/assets/images/icons/icon-565x565.png';

const Hero = () => {
	const [arrItem, setArrItem] = useState(0);

	const nextItem = () => {
		const check = (arrItem + 1) % greetingList.length;
		setArrItem(check);
	};

	return (
		<section>
			<div className='flex items-center justify-center md:flex-row flex-col'>
				<div className='rounded-full border-[3px] border-sh-blue relative scale-95 hover:scale-100 transition ease-in shadow-lg'>
					<div className='h-44 w-44 select-none relative group'>
						<Image
							className='rounded-full w-full h-full'
							src={UserImg}
							alt='ShafinAvatar'
							layout='fill'
							draggable='false'
						/>
						<div className='absolute bottom-0 flex-col items-center hidden mb-44 group-hover:flex'>
							<span className='relative z-10 p-2 text-xs leading-none text-sh-white whitespace-no-wrap bg-sh-dark shadow-lg rounded-md'>
								{"Hey, It's so nice to see you here, thanks for visiting !"}
							</span>
							<div className='w-3 h-3 -mt-2 rotate-45 bg-sh-dark'></div>
						</div>
					</div>
				</div>
				<div className='ml-0 md:ml-16'>
					<div className='relative group inline-block'>
						<h2
							onClick={nextItem}
							className='text-3xl font-bold animate-up bg-gradient-to-r from-sh-blue to-sh-blue mb-5 tracking-widest inline-block cursor-pointer select-none'
						>
							{greetingList[arrItem].text}
							<span className='italic'>!</span>
						</h2>
						<div className='absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex'>
							<span className='relative z-10 p-2 text-xs leading-none text-sh-white whitespace-no-wrap bg-sh-dark shadow-lg rounded-md'>
								{greetingList[arrItem].lang}
							</span>
							<div className='w-3 h-3 -mt-2 rotate-45 bg-sh-dark'></div>
						</div>
					</div>

					<h1 className='text-2xl font-normal leading-10'>
						<span className='block'>
							I am{' '}
							<span className='font-bold tracking-widest animate-up bg-gradient-to-r from-sh-purple to-sh-purple cursor-default select-none'>
								Shahriar Shafin
							</span>
							, a web developer
						</span>
						from Bangladesh who focuses on frontend technologies & collaborates
						to open source projects.
						<span className='mt-5 block'>
							I am passionate about building excellent software that improves
							the lives of those around me.
						</span>
					</h1>
				</div>
			</div>
			<div
				className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
				aria-hidden='true'
			>
				<div
					className='aspect-[1155/678] w-[70rem] bg-gradient-to-tr from-sh-purple to-sh-blue opacity-[0.15]'
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 90% 61.6%, 90.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 59.5% 27.5%, 74.2% 61.4%, 29.4% 68.1%, 65% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 10.1% 40.9%, 17.9% 100%, 77.6% 78%, 76.1% 83.7%, 86.1% 50%)',
					}}
				/>
			</div>
		</section>
	);
};

export default Hero;
