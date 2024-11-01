module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",   // stránky v Next.js
    "./components/**/*.{js,ts,jsx,tsx}",  // komponenty
    "./app/**/*.{js,ts,jsx,tsx}",   // složka app, pokud používáš App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
