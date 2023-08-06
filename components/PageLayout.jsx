import { Footer, NavBar } from '../components';
import Meta from '../utils/Meta';

const PageLayout = ({ children }) => {
	return (
		<>
			<Meta />
			<NavBar />
			<main className='relative isolate overflow-hidden'>
				<div className='max-w-[50rem] mx-auto min-h-screen w-full py-3 px-5 md:px-10 lg:px-0 pt-16'>
					{children}
				</div>
			</main>
			<Footer />
		</>
	);
};
export default PageLayout;
