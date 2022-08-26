import { PageLayout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<PageLayout>
			<Component {...pageProps} />
		</PageLayout>
	);
}

export default MyApp;
