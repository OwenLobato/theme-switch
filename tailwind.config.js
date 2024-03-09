/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: 'var(--color-bg-primary)',
        bgSecondary: 'var(--color-bg-secondary)',
        textTilte: 'var(--color-text-title)',
        textSubTitle: 'var(--color-text-subtitle)',
        textContent: 'var(--color-text-content)',
        btnHover: 'var(--color-hover)',
        btn: 'var(--color-btn)',
      },
    },
  },
  plugins: [],
};
