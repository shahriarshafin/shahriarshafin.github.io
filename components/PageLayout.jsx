// import Head from 'next/head';
import Meta from '../utils/Meta';
import Footer from './Footer';
import NavBar from './NavBar';

const PageLayout = ({ children }) => {
	return (
		<>
			<Meta />
			<NavBar />
			<main className='max-w-[50rem] mx-auto w-full py-3 px-10 md:px-0'>
				{children}
			</main>
			<Footer />
		</>
	);
};
export default PageLayout;
