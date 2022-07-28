import Image from 'next/image';
import UserImg from '../assets/images/user.png';

const Hero = () => {
	return (
		<div className='max-w-[50rem] mx-auto w-full py-3 px-10 md:px-0 mt-10'>
			<div className='flex items-center justify-center md:flex-row flex-col'>
				<div className='rounded-full border-[3px] border-sh-blue relative scale-95 hover:scale-100 transition ease-in shadow-lg'>
					<div className='h-44 w-44'>
						<Image
							className='rounded-full w-full h-full'
							src={UserImg}
							alt='Picture of the author'
							layout='fill'
						/>
					</div>
				</div>

				<div className='ml-0 md:ml-16'>
					<h2 className='text-3xl font-bold hover-bg mb-5 tracking-widest inline-block cursor-pointer'>
						Hello!
					</h2>
					<h3 className='text-2xl font-normal leading-10'>
						I am{' '}
						<span className='font-bold tracking-widest hover-bg cursor-default'>
							Shahriar Shafin
						</span>{' '}
						and Im a<br />
						No Stack Developer and an open source lover from Bangladesh
					</h3>
					<h3 className='text-2xl font-normal mt-5 leading-10'>
						This is my digital garden, where I write about the things Im working
						on and share what Ie learned.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Hero;
