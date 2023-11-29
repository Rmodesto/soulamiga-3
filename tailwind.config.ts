import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
      colors: {
        green: {
          900: '#789395',
        },
        gold: {
          900: '#E3DDB8',
        },
        black: {
          900: '#303940',
        },
        white: {
          900: '#fff',
        },
      },

    },
  },
  plugins: [],
}
export default config
