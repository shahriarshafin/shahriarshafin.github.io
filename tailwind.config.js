/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'sh-white': '#EDEDEE',
				'sh-blue': '#1A85FF',
				'sh-blue-500': '#8AC5EB',
				'sh-dark': '#2D3748',
				'sh-dark-500': '#1A202C',
			},
		},
	},
	plugins: [],
};
