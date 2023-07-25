module.exports = {
  content: ['./*.html', './*.php'],
  theme: {
    extend: {
      colors: {
        Primary: '#4bb6c2',
        Secondary: '#1e5178',
        Dark3e4: '#3e454e',
        Dark1f2: '#1f2935',
        Gray8a9: '#8a919a',
        Gray858: '#858585',
        Gray565: '#565b61',
        Grayf8f: '#f8f9fb',
      },
      boxShadow: {
        card: '0px 20px 54px 0px rgba(0, 0, 0, 0.06)',
        cardPrimary: '0px 20px 54px 0px rgba(30, 87, 124, 0.3)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
