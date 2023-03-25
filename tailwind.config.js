/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/*.{html, js}",
    "./src/**/*.{html, js}",
    "./src/pages/calendar/*.{js, html}",
    "./src/pages/exercises/*.{js, html}",
    "./src/pages/home/*.{js, html}",
    "./src/pages/todoList/*.{js, html}",
    "./src/components/header/*.{js, html}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
