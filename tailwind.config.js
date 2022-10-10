const { DEFAULT_THEME } = require('@zendeskgarden/react-theming')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '320px',
      ...DEFAULT_THEME.screens,

      md: '480px',
      ...DEFAULT_THEME.screens,

      lg: '800px',
      ...DEFAULT_THEME.screens,
    },
  },
  plugins: [require('@zendeskgarden/tailwindcss')],
}
