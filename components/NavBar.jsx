import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import UserImg from '../public/assets/images/icons/icon-565x565.png';

const NavBar = () => {
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const webLinks = [
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Open Source', path: '/open-source' },
	];

	return (
		<div className='fixed top-0 z-20 w-full shadow-lg bg-sh-dark-500 bg-opacity-80 backdrop-filter backdrop-blur-sm mb-28'>
			<div className='max-w-[50rem] mx-auto w-full px-5 py-2.5 md:px-10 lg:px-0'>
				<div className='flex items-center w-full'>
					<div className='inline-flex items-center justify-start w-3/4'>
						<div className='dropdown'>
							<label
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className='md:hidden'
							>
								<HiOutlineMenuAlt1 className='p-2 mr-5 rounded-lg cursor-pointer bg-sh-dark h-9 w-9' />
							</label>
							{isMenuOpen && (
								<ul className='border border-sh-white-500 bg-sh-dark-500 bg-opacity-[0.97] backdrop-filter shadow-lg shadow-sh-dark-500 rounded-md absolute mt-3 px-2 py-5 w-64 space-y-5'>
									{webLinks.map((link, index) => (
										<li key={index} onClick={() => setIsMenuOpen(false)}>
											<Link
												href={link.path}
												className={
													router.pathname == link.path
														? 'menu-item active'
														: 'menu-item'
												}
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							)}
						</div>
						<Link
							href='/'
							className='flex w-10 h-10 transition ease-in scale-90 border-2 rounded-full select-none border-sh-blue mr-7 hover:scale-100'
						>
							<Image
								className='rounded-full'
								src={UserImg}
								alt='Shafin Avatar'
								draggable='false'
								style={{
									maxWidth: '100%',
									height: 'auto',
									objectFit: 'contain',
								}}
							/>
						</Link>
						<div className='hidden md:flex'>
							<ul className='inline-flex flex-row gap-3'>
								{webLinks.map((link, index) => (
									<li key={index}>
										<Link
											href={link.path}
											className={
												router.pathname == link.path
													? 'menu-item active'
													: 'menu-item'
											}
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className='flex justify-end w-1/4 gap-3 text-xl'>
						<a
							target='_blank'
							aria-label='github link'
							rel='noopener noreferrer'
							href='https://github.com/shahriarshafin'
							className='p-3 transition ease-in cursor-pointer rounded-xl hover:bg-sh-dark'
						>
							<FaGithub />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
