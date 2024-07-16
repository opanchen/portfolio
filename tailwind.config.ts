import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'pre-sm': '320px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        white: {
          primary: 'rgb(255, 255, 255)',
          secondary: '#eff1ea',
          shadow: '#f4f4f5',
        },
        black: {
          primary: '#191919',
          secondary: 'rgb(38 38 38)', // neutral-800
        },
        gray: {
          primary: 'rgb(100 116 139)', // slate-500
          secondary: 'rgb(82 82 91)', // zinc-600
        },
        blue: {
          sky: 'rgb(186, 230, 253)',
        },
        yellow: 'rgb(250 204 21)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
