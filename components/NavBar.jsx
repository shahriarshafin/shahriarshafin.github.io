import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsSunFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import UserImg from '../assets/images/user.png';

const webLinks = [
	{ name: 'About', path: '/about' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'Open Source', path: '/open-source' },
];

const NavBar = () => {
	const router = useRouter();
	return (
		<nav className='bg-[#1a202c] bg-opacity-80 sticky top-0 z-20 backdrop-filter backdrop-blur-sm shadow-lg'>
			<div className='max-w-[50rem] mx-auto w-full flex justify-between items-center py-2.5 px-10 md:px-0'>
				<div className='flex items-center'>
					<Link href='/'>
						<a className='rounded-full border-2 border-sh-blue flex mr-7 w-10 h-10 scale-90 hover:scale-100 transition ease-in'>
							<Image
								className='rounded-full'
								src={UserImg}
								alt='ShafinAvatar'
								objectFit='contain'
								draggable='false'
							/>
						</a>
					</Link>
					<div className='hidden md:block'>
						<ul className='flex gap-3'>
							{webLinks.map((link, index) => (
								<li key={index}>
									<Link href={link.path}>
										<a
											className={
												router.pathname == link.path
													? 'menu-item active'
													: 'menu-item'
											}
										>
											{link.name}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='text-xl flex gap-3 cursor-pointer'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/shahriarshafin'
						className='p-3 rounded-xl hover:bg-sh-dark transition ease-in'
					>
						<FaGithub />
					</a>
					<button className='p-3 rounded-xl hover:bg-sh-dark transition ease-in'>
						<BsSunFill />
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
