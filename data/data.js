import {
	FaDribbble,
	FaGithub,
	FaLinkedin,
	FaRegEnvelope,
} from 'react-icons/fa';

export const featuredRepositories = [
	'shahriarshafin',
	'nodemcu-esp8266-fake-sign-in',
	'myportfolio',
	'snippets-treasury',
];

export const companies = [
	{
		id: 1,
		institution: 'Taskeasy Technologies',
		logo: '/assets/images/companies/taskeasy.png',
		degree: 'Software Engineer',
		startDate: 'Apr 2023',
		endDate: 'Present',
	},
	{
		id: 2,
		institution: 'Pridesys IT Limited',
		logo: '/assets/images/companies/pridesys.png',
		degree: 'Software Engineer - Intern',
		startDate: 'Aug 2022',
		endDate: 'Nov 2022',
	},
];

export const institutions = [
	{
		id: 1,
		institution: 'University of Asia Pacific',
		logo: '/assets/images/institutions/uap.png',
		degree: 'Bachelor of Science, Computer Science & Engineering (CSE)',
		startDate: '2018',
		endDate: '2022',
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

export const socialMedia = [
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
		label: 'Mail to Shafin',
		icon: <FaRegEnvelope />,
		url: 'mailto:connect.shafin@gmail.com',
	},
];
