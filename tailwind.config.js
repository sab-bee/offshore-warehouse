module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brown-50': '#EFEBE9',
        'brown-200': '#BCAAA4',
        'brown-400': '#8D6E63',
        'brown-500': '#795548',
        'brown-900': '#3E2723',
        'accent-light': '#F5F2ED',
        'accent-brown': '#E0D8D3',
      },
    },
    backgroundImage: {
      'hero-pattern': "url('/img/hero-pattern.svg')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
  },
  plugins: [],
}
