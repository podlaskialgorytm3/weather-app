export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mountains': "url('https://cdn.pixabay.com/photo/2023/12/06/08/41/mountain-8433234_1280.jpg')",
      },
      colors: {
        primary: '#72AED4'
      }
    },
  },
  plugins: [],
};
