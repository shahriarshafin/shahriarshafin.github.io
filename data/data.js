import {
	FaDribbble,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaRegEnvelope,
} from 'react-icons/fa';

export const GITHUB_API_URL = 'https://api.github.com';

export const GITHUB_USERNAME = 'shahriarshafin';

export const Companies = [
	{
		id: 1,
		institution: 'Pridesys IT Limited',
		logo: '/assets/images/companies/pridesys.png',
		degree: 'Software Engineer - Intern',
		startDate: '2022',
		endDate: 'Present',
	},
];

export const Institutions = [
	{
		id: 1,
		institution: 'University of Asia Pacific',
		logo: '/assets/images/institutions/uap.png',
		degree: 'Bachelor of Science, Computer Science & Engineering (CSE)',
		startDate: '2018',
		endDate: 'Present',
	},
	{
		id: 2,
		institution: 'Cantonment Public School & College, BUSMS',
		logo: '/assets/images/institutions/busms.png',
		degree: 'Higher Secondary Certificate, Science',
		startDate: '2016',
		endDate: '2018',
	},
	{
		id: 3,
		institution: 'Cantonment Public School & College, Saidpur',
		logo: '/assets/images/institutions/cpscs.png',
		degree: 'Secondary School Certificate, Science',
		startDate: '2014',
		endDate: '2016',
	},
];

export const SocialMedia = [
	{
		id: 1,
		label: 'Github',
		icon: <FaGithub />,
		url: 'https://github.com/shahriarshafin',
	},
	{
		id: 2,
		label: 'Linkedin',
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/shahriarshafin/',
	},
	{
		id: 3,
		label: 'Dribbble',
		icon: <FaDribbble />,
		url: 'https://dribbble.com/shahriarshafin',
	},
	{
		id: 4,
		label: 'Facebook',
		icon: <FaFacebook />,
		url: 'https://www.facebook.com/shhriar.shafin',
	},
	{
		id: 5,
		label: 'Mail to Shafin',
		icon: <FaRegEnvelope />,
		url: 'mailto:connect.shafin@gmail.com',
	},
];
