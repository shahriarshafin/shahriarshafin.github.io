import {
	FaDribbble,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaRegEnvelope,
} from 'react-icons/fa';

import BUSMS from '../assets/images/institutions/busms.png';
import CPSCS from '../assets/images/institutions/cpscs.png';
import UAP from '../assets/images/institutions/uap.png';

export const Institutions = [
	{
		id: 1,
		institution: 'University of Asia Pacific',
		logo: CPSCS,
		degree: 'Bachelor of Science, Computer Science & Engineering (CSE)',
		startDate: '2018',
		endDate: 'Present',
	},
	{
		id: 2,
		institution: 'Cantonment Public School & College, BUSMS',
		logo: BUSMS,
		degree: 'Higher Secondary Certificate, Science',
		startDate: '2016',
		endDate: '2018',
	},
	{
		id: 3,
		institution: 'Cantonment Public School & College, Saidpur',
		logo: UAP,
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
