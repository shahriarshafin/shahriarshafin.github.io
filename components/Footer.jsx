import {
	FaDribbble,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaRegEnvelope,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='max-w-3xl mx-auto w-full py-3 px-10 md:px-0'>
			<div className='mt-10 flex md:flex-row flex-col items-center justify-between p-4 gap-2'>
				<p className='order-2 md:order-1'>
					© {new Date().getFullYear()} Shahriar Shafin
				</p>
				<div className='flex gap-5 text-lg order-1 md:order-2'>
					<a
						className='p-2 rounded-md hover:bg-sh-dark-500 hover:text-sh-blue transition ease-in'
						href=''
					>
						<FaGithub />
					</a>
					<a
						className='p-2 rounded-md hover:bg-sh-dark-500 hover:text-sh-blue transition ease-in'
						href=''
					>
						<FaLinkedin className='text-[#90CDF4]' />
					</a>
					<a
						className='p-2 rounded-md hover:bg-sh-dark-500 hover:text-sh-blue transition ease-in'
						href=''
					>
						<FaDribbble className='text-[#ea4c89]' />
					</a>
					<a
						className='p-2 rounded-md hover:bg-sh-dark-500 hover:text-sh-blue  transition ease-in'
						href=''
					>
						<FaRegEnvelope />
					</a>
					<a
						className='p-2 rounded-md hover:bg-sh-dark-500 hover:text-sh-blue  transition ease-in'
						href=''
					>
						<FaFacebook className='text-[#90CDF4]' />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
