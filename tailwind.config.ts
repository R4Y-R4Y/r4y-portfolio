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
          50: '#0a0712',
          100: '#140e25',
          200: '#281c4a',
          300: '#3c2a6f',
          400: '#513894',
          500: '#6546b9',
          600: '#846bc7',
          700: '#a290d5',
          800: '#c1b5e3',
          900: '#e0daf1',
          950: '#f0edf8',
        },
        'background': {
          50: '#0a0712',
          100: '#140e25',
          200: '#281d49',
          300: '#3c2b6e',
          400: '#503993',
          500: '#6347b8',
          600: '#836cc6',
          700: '#a291d4',
          800: '#c1b6e2',
          900: '#e0daf1',
          950: '#efedf8',
        },
        'primary': {
          50: '#06001a',
          100: '#0d0033',
          200: '#1a0066',
          300: '#260099',
          400: '#3300cc',
          500: '#4000ff',
          600: '#6633ff',
          700: '#8c66ff',
          800: '#b399ff',
          900: '#d9ccff',
          950: '#ece5ff',
        },
        'secondary': {
          50: '#110514',
          100: '#220b28',
          200: '#451551',
          300: '#672079',
          400: '#892ba1',
          500: '#ac36c9',
          600: '#bc5ed4',
          700: '#cd86df',
          800: '#deaeea',
          900: '#eed7f4',
          950: '#f7ebfa',
        },
        'accent': {
          50: '#180217',
          100: '#2f042e',
          200: '#5e085d',
          300: '#8e0b8b',
          400: '#bd0fba',
          500: '#ec13e8',
          600: '#f042ed',
          700: '#f471f1',
          800: '#f7a1f6',
          900: '#fbd0fa',
          950: '#fde7fd',
        },
       },
       
    },
  },
  plugins: [],
}
export default config
