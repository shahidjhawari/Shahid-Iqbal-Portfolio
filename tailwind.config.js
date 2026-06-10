export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#121212',
        silver: '#C0C0C0',
        silverSoft: '#8A8A8A',
        accent: '#D9D9D9',
        muted: '#A0A0A0',
      },
      boxShadow: {
        glass: '0 40px 120px rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
