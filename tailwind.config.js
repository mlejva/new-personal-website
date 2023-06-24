module.exports = {
  purge: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      textColor: {
        'primary': '#ffffff',
        'secondary': '#9CA3AF',
      },
      backgroundColor: {
        'dark': '#1F2937',
        'darker': '#111827',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}