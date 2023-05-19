/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
	},
  plugins: [
    require('prettier-plugin-tailwindcss'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/typography'),
	],
};

