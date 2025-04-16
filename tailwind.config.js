/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px' 
    },
    extend: {
      colors: {
        deepBlue: '#023A79',
        brightBlue: '#046BDF',
        royalBlue: '#102CB1',
        midnightBlue: '#07134B',
        mintGreen: '#B4FFA3',
        pureBlack: '#000000',
        lightMint: '#E3FFDD',
        skyTint: '#D2E7FF',
        goldYellow: '#FED600',
        neonLime: '#E7FF2E',
      }
    },
  },
  plugins: [],
}
