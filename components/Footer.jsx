import {
	FaDribbble,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaRegEnvelope,
} from 'react-icons/fa';

const socialLinks = [
	{
		label: 'Github',
		icon: <FaGithub />,
		url: 'https://github.com/shahriarshafin',
	},
	{
		label: 'Linkedin',
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/shahriarshafin/',
	},
	{
		label: 'Dribbble',
		icon: <FaDribbble />,
		url: 'https://dribbble.com/shahriarshafin',
	},
	{
		label: 'Facebook',
		icon: <FaFacebook />,
		url: 'https://www.facebook.com/shhriar.shafin',
	},
	{
		label: 'Mail to Shafin',
		icon: <FaRegEnvelope />,
		url: 'mailto:connect.shafin@gmail.com',
	},
];

const Footer = () => {
	return (
		<footer className='max-w-[50rem] mx-auto w-full py-2 px-10 md:px-0'>
			<div className='flex md:flex-row flex-col items-center justify-between p-4 gap-2'>
				<p className='order-2 md:order-1'>
					© {new Date().getFullYear()} Shahriar Shafin
				</p>
				<div className='flex gap-3 text-lg order-1 md:order-2'>
					{socialLinks.map((item, index) => {
						return (
							<a
								key={index}
								href={item.url}
								aria-label={item.label}
								target='_blank'
								rel='noopener noreferrer'
								className='p-3 rounded-xl hover:bg-sh-dark hover:text-sh-blue transition ease-in'
							>
								{item.icon}
							</a>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
