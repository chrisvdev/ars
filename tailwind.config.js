/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'basic-sans': ['"basic-sans"', 'sans-serif'],
        'thirsty-rough-two': ['"thirsty-rough-two"', 'sans-serif'],
      },
    },
    plugins: [],
  }
}

