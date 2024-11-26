import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { BASE_URL } from '@/lib/constants';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { ViewTransitions } from 'next-view-transitions';
import { Cabin } from 'next/font/google';

import './globals.css';

const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap'
});
export const viewport = {
  colorScheme: 'only dark',
  themeColor: '#1A1F2A'
};
export async function generateMetadata() {
  return {
    referrer: 'origin',
    pageType: 'Portfolio',
    other: {
      'page-type': 'Portfolio',
      copyright: 'Shahriar Shafin',
      audience: 'Everyone',
      'itemProp:name': 'Shahriar Shafin | Frontend Developer',
      'itemProp:description':
        'Shahriar Shafin is a web designer & front-end web developer based in Dhaka, Bangladesh',
      'itemProp:image': `${BASE_URL}/opengraph-image.png`
    },
    metadataBase: new URL(BASE_URL),

    title: {
      default: 'Shahriar Shafin | Frontend Developer',
      template: '%s | Shahriar Shafin'
    },
    verification: {
      google: 'process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION'
    },

    description:
      'Frontend developer specializing in React.js & Next.js. Building excellent software that improves lives through open source contributions and innovative web solutions',

    applicationName: 'Shahriar Shafin',

    keywords: [
      'shafin',
      'shafin uap',
      'shahriar shafin',
      'shafin website',
      'shafin bd',
      'shafin portfolio',
      'frontend developer',
      'web developer',
      'React.js',
      'Next.js',
      'TailwindCSS',
      'Bangladesh',
      'open source contributor'
    ],
    authors: [{ name: 'Shahriar Shafin', url: BASE_URL }],
    creator: 'Shahriar Shafin',
    publisher: 'Shahriar Shafin',

    openGraph: {
      title: 'Shahriar Shafin',
      description:
        'Frontend developer specializing in React.js & Next.js. Building excellent software that improves lives through open source contributions and innovative web solutions',
      authors: ['Shahriar Shafin'],
      url: BASE_URL,
      siteName: 'Shahriar Shafin',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: 'Shahriar Shafin | Frontend Developer',
          type: 'image/png'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Shahriar Shafin',
      description:
        'Frontend developer specializing in React.js & Next.js. Building excellent software that improves lives through open source contributions and innovative web solutions',
      images: [`${BASE_URL}/opengraph-image.png`],
      creator: '@connectshafin',
      site: '@connectshafin',
      url: BASE_URL
    },
    icons: {
      icon: '/favicon.ico'
    },
    manifest: `${BASE_URL}/manifest.json`,
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false
      }
    },
    languages: {
      'en-US': '/en-US'
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${cabin.className} h-full scroll-smooth`}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        <body className="antialiased">
          <Navbar />
          <main className="relative isolate overflow-hidden">
            <div className="mx-auto min-h-svh w-full max-w-[50rem] px-5 py-3 pt-16 md:px-10 lg:px-0">
              {children}
            </div>
          </main>
          <Footer />
        </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      </html>
    </ViewTransitions>
  );
}
