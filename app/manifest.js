import { BASE_URL } from '@/lib/constants';

export default function manifest() {
  return {
    name: 'Shahriar Shafin',
    short_name: 'Shafin',
    description: 'Shahriar Shafin protfolio website',
    theme_color: '#1A85FF',
    background_color: '#171923',
    manifest_version: 2,
    display: 'standalone',
    display_override: ['window-controls-overlay'],
    scope: '/',
    start_url: '/',
    id: '/',
    categories: ['Portfolio', 'Shafin'],
    version: '3.1.0',
    orientation: 'portrait',
    lang: 'en-US',
    capture_links: 'existing_client_event',
    url_handlers: [{ origin: `${BASE_URL}` }],
    prefer_related_applications: true,
    protocol_handlers: [
      {
        protocol: 'web+Shafin',
        name: 'Open with Shafin',
        description: 'Handles links with the shafin protocol',
        url: '/?url=%s'
      }
    ],
    icons: [
      {
        src: '/images/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/images/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/images/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/images/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/images/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/images/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/images/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/images/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/images/icons/icon-565x565.png',
        sizes: '565x565',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        type: 'image/png',
        src: '/images/screenshots/screenshot-2320x1680.png',
        sizes: '2320x1680',
        form_factor: 'wide',
        label: 'Application'
      },

      {
        type: 'image/png',
        src: '/images/screenshots/screenshot-666x1184.png',
        sizes: '666x1184',
        label: 'Application'
      }
    ]
  };
}
