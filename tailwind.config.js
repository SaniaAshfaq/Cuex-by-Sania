module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '769px'},   // Mobile devices up to 769px
        'md': {'min': '770px', 'max': '999px'},  // Medium devices from 770px to 999px
        'lg': {'min': '1000px', 'max': '1279px'}, // Large devices from 1000px to 1279px
        'xl': {'min': '1280px'}, // Extra large devices starting from 1280px
      },
    },
  },
  plugins: [],
}
