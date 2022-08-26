import { Footer, NavBar } from '../components';
import Meta from '../utils/Meta';

const PageLayout = ({ children }) => {
	return (
		<>
			<Meta />
			<NavBar />
			<main className='max-w-[50rem] mx-auto w-full py-3 px-5 md:px-10 lg:px-0'>
				{children}
			</main>
			<Footer />
		</>
	);
};
export default PageLayout;
