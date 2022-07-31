import {
	FaDribbble,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaRegEnvelope,
} from 'react-icons/fa';

import BUSMS from '../assets/images/busms.png';
import CPSCS from '../assets/images/cpscs.png';
import UAP from '../assets/images/uap.png';

export const Institutions = [
	{
		institution: 'University of Asia Pacific',
		logo: CPSCS,
		degree: 'Bachelor of Science, Computer Science & Engineering (CSE)',
		startDate: '2018',
		endDate: 'Present',
	},
	{
		institution: 'Cantonment Public School & College, BUSMS',
		logo: BUSMS,
		degree: 'Higher Secondary Certificate, Science',
		startDate: '2016',
		endDate: '2018',
	},
	{
		institution: 'Cantonment Public School & College, Saidpur',
		logo: UAP,
		degree: 'Secondary School Certificate, Science',
		startDate: '2014',
		endDate: '2016',
	},
];

export const SocialMedia = [
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
