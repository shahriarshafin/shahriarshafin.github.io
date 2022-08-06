import Head from 'next/head';
import { useRouter } from 'next/router';
import UserImg from '../assets/images/others/user.png';
const Meta = () => {
	const routerPath =
		useRouter().pathname.replaceAll('/', '').charAt(0).toUpperCase() +
		useRouter().pathname.replaceAll('/', '').slice(1);
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta charSet='utf-8' />
			<meta
				name='keywords'
				content='web development, programming, web design, react js, chakra ui'
			/>
			<meta
				name='description'
				content='Software Engineer. Lover of web and opensource.'
			/>
			<meta name='author' content='Shahriar Shafin' />
			<meta property='og:title' content={'title'} />
			<meta property='og:image' content={UserImg} />
			<meta
				property='og:description'
				content='Software Engineer. Lover of web and opensource.'
			/>
			<meta property='og:site_name' content={'title'} />
			<meta name='twitter:title' content={'title'} />
			<meta
				name='twitter:description'
				content='Software Engineer. Lover of web and opensource.'
			/>
			<meta name='twitter:image' content={UserImg} />
			<meta name='twitter:card' content='summary_large_image' />
			<title>
				{routerPath === ''
					? 'Shahriar Shafin | Front-End Developer'
					: routerPath + ' | Shahriar Shafin'}
			</title>
		</Head>
	);
};

export default Meta;
