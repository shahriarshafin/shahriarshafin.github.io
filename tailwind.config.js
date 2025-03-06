/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#2D3748',
        primary: '#1A85FF',
        'primary-foreground': '#8AC5EB',
        secondary: '#ec4899',
        card: '#1A202C',
        muted: '#929A9E'
      },
      fontFamily: {
        cabin: ['"Cabin"', 'sans-serif']
      }
    }
  },
  plugins: []
};
