// import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import { PageLayout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	// useEffect(() => {
	// 	if ('serviceWorker' in navigator) {
	// 		navigator.serviceWorker.register('/service-worker.js');
	// 	}
	// }, []);

	return (
		<PageLayout>
			<Component {...pageProps} />
		</PageLayout>
	);
}

export default MyApp;
