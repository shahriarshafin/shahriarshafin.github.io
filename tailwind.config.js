/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./utils/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			'sh-white': '#EDEDEE',
			'sh-white-500': '#929A9E',
			'sh-blue': '#1A85FF',
			'sh-blue-500': '#8AC5EB',
			'sh-purple': '#ec4899',
			'sh-dark': '#2D3748',
			'sh-dark-500': '#1A202C',
		},
	},
	plugins: [],
};
