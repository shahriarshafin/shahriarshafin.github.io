import Image from 'next/image';
import { BsSunFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import UserImg from '../assets/images/user.png';

const NavBar = () => {
	return (
		<nav className='bg-sh-dark-500'>
			<div className='max-w-3xl mx-auto w-full flex justify-between items-center py-3 px-10 md:px-0'>
				<div className='flex items-center'>
					<a href='' className='mr-5'>
						<Image
							className='rounded-full'
							src={UserImg}
							alt='Picture of the author'
							width={40}
							height={40}
						/>
					</a>
					<ul className='flex gap-4'>
						<li>
							<a
								className='text-xl px-2 py-2 rounded-md hover:bg-sh-black hover:text-sh-blue transition ease-in'
								href='#'
							>
								About
							</a>
						</li>
						<li>
							<a
								className='text-xl px-2 py-2 rounded-md hover:bg-sh-black hover:text-sh-blue transition ease-in'
								href='#'
							>
								Blog
							</a>
						</li>
						<li>
							<a
								className='text-xl px-2 py-2 rounded-md hover:bg-sh-black hover:text-sh-blue transition ease-in'
								href='#'
							>
								Links
							</a>
						</li>
					</ul>
				</div>
				<div className='text-xl flex gap-3 cursor-pointer'>
					<a
						className='px-2 py-2 rounded-md hover:bg-sh-black transition ease-in'
						href=''
					>
						<FaGithub />
					</a>
					<a
						className='px-2 py-2 rounded-md hover:bg-sh-black transition ease-in'
						href=''
					>
						<BsSunFill />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
