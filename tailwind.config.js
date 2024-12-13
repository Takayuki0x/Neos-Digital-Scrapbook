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
    extend: {},
  },
  plugins: [],
}

