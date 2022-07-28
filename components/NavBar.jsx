import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsSunFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import UserImg from '../assets/images/user.png';
const NavBar = () => {
	const router = useRouter();
	return (
		<nav className='bg-sh-dark-500 bg-opacity-80 sticky top-0 z-10 backdrop-filter backdrop-blur-lg  shadow-lg'>
			<div className='max-w-[50rem] mx-auto w-full flex justify-between items-center py-3 px-10 md:px-0'>
				<div className='flex items-center'>
					<Link href='/'>
						<a className='rounded-full border-2 border-sh-blue flex mr-7 w-10 h-10'>
							<Image
								className='rounded-full'
								src={UserImg}
								alt='Picture of the author'
								objectFit='contain'
							/>
						</a>
					</Link>
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
							<Link href='/projects'>
								<a
									className={
										router.pathname == '/projects'
											? 'active'
											: 'text-xl px-2 py-2 rounded-md hover:bg-sh-black hover:text-sh-blue transition ease-in'
									}
								>
									Projects
								</a>
							</Link>
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
