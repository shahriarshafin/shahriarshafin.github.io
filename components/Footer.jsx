import { SocialMedia } from '../data/data';

const Footer = () => {
	return (
		<footer className='max-w-[50rem] mx-auto w-full py-2 px-10 md:px-0'>
			<div className='flex md:flex-row flex-col items-center justify-between p-4 gap-2'>
				<p className='order-2 md:order-1'>
					© {new Date().getFullYear()} Shahriar Shafin
				</p>
				<div className='flex gap-3 text-lg order-1 md:order-2'>
					{SocialMedia.map((social, index) => {
						return (
							<a
								key={index}
								href={social.url}
								aria-label={social.label}
								target='_blank'
								rel='noopener noreferrer'
								className='p-3 rounded-xl hover:bg-sh-dark hover:text-sh-blue transition ease-in'
							>
								{social.icon}
							</a>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
