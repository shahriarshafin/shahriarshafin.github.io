import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import NavBar from '../components/NavBar';
import PinnedRepo from '../components/PinnedRepo';

export default function Home() {
	return (
		<>
			<NavBar />
			<main className='max-w-[50rem] mx-auto w-full py-3 px-10 md:px-0'>
				<Hero />
				<Highlights />
				<PinnedRepo />
			</main>
			<Footer />
		</>
	);
}
