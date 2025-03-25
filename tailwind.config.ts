import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        emerald: '#10B981',
        zinc: {
          50: '#F9FAFB',
          950: '#18181B',
        },
      },
    },
  },
  plugins: [],
};

export default config;