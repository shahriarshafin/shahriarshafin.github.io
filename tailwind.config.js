/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			'sh-black': '#171923',
			'sh-white': 'rgba(255, 255, 255, 0.92)',
			'sh-blue': '#63b3ed;',
			'sh-dark': '#171923',
			'sh-dark-500': '#2D3748',
		},
	},
	plugins: [],
};
