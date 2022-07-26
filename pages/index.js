import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<main className=''>
			<NavBar />
			<Hero />
			<Highlights />
		</main>
	);
}
