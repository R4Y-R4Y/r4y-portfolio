import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': {
          50: '#190102',
          100: '#320104',
          200: '#640209',
          300: '#96030d',
          400: '#c80411',
          500: '#fa0515',
          600: '#fb3744',
          700: '#fc6973',
          800: '#fd9ba2',
          900: '#fecdd0',
          950: '#fee6e8',
        },
        'background': {
          50: '#0d0d0d',
          100: '#1a1a1a',
          200: '#333333',
          300: '#4d4d4d',
          400: '#666666',
          500: '#808080',
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
          950: '#f2f2f2',
        },
        'primary': {
          50: '#001a04',
          100: '#003309',
          200: '#006611',
          300: '#00991a',
          400: '#00cc22',
          500: '#00ff2b',
          600: '#33ff55',
          700: '#66ff80',
          800: '#99ffaa',
          900: '#ccffd5',
          950: '#e5ffea',
        },
        'secondary': {
          50: '#011917',
          100: '#02312f',
          200: '#04625e',
          300: '#05948d',
          400: '#07c5bb',
          500: '#09f6ea',
          600: '#3af8ee',
          700: '#6bfaf3',
          800: '#9dfbf7',
          900: '#cefdfb',
          950: '#e6fefd',
        },
        'accent': {
          50: '#170304',
          100: '#2d0608',
          200: '#5b0b0f',
          300: '#881117',
          400: '#b6161e',
          500: '#e31c26',
          600: '#e94951',
          700: '#ee777d',
          800: '#f4a4a8',
          900: '#f9d2d4',
          950: '#fce8e9',
        },
       },
       
    },
  },
  plugins: [],
}
export default config
