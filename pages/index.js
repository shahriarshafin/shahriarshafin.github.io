import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import NavBar from '../components/NavBar';
import PinnedRepo from '../components/PinnedRepo';

export default function Home() {
	return (
		<main className=''>
			<NavBar />
			<Hero />
			<Highlights />
			<PinnedRepo />
		</main>
	);
}
