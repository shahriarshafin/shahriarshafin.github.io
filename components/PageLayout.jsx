import Footer from './Footer';
import NavBar from './Navbar';
const PageLayout = ({ children }) => {
	return (
		<div>
			<NavBar />
			<main className='max-w-[50rem] mx-auto w-full py-3 px-10 md:px-0'>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default PageLayout;
