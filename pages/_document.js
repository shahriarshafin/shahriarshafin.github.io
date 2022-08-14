import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html itemScope itemType='http://schema.org/Organization' lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
					strategy='afterInteractive'
				/>

				<Script id='google-analytics' strategy='afterInteractive'>
					{`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){window.dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                      });
                 `}
				</Script>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
