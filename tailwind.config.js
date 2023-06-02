/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#272343',
          medium: '#4560A6',
          light: '#5c84F2',
          turquoise: '#5C84F2',
        },
        purple: {
          dark: '#6712A5',
          light: '#9A27F1',
          black: '#272343'
        },
        yellow: '#FFD803',
        black: {
          default: '#000',
          light: '#3c3c3c'
        },
        gray: {
          thin: '#d1c1c0',
          light: '#ebebeb',
          extraLight: '#9391a1',
          medium: '#606060',
          dark: '#444444',
          regular: '#bab9c1'
        }
      },
      fontSize: {
        'title-xl': 45,
        'title-lg': 35,
        title: 28,
        xxs: 10,
      },
      borderRadius: {
        xxl: 30,
      },
      lineHeight: {
        1: 1,
      },
      gridColumn: {
        14: 14,
      }
    },
    screens: {
      xs: '380px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    }
  },
  plugins: [],
}
