/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      comic: ['Comic Sans MS', 'Comic Sans', 'cursive'],
      verdana: ['Verdana', 'sans-serif'],
      courier: ['Courier', 'monospace'],
      ocraextended: ['OCR A Extended', 'monospace'],
    },
    extend: {
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '33%': { opacity: 0.8 },
          '66%': { opacity: 0.4 },
        },
      },
      animation: {
        flicker: 'flicker 1s infinite',
      },
    },
  },
  plugins: [],
}

