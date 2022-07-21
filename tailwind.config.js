module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '14rem',
          '2xl': '6rem',
        },
      },
      extend: {
      dropShadow: {
        '4xl': [
            '1px 1px 0px rgba(0, 0, 0, 1)',
            '2px 2px 0px rgba(0, 0, 0, 1)',
            '3px 3px 0px rgba(0, 0, 0, 1)'
          ],
        'solid': [
            '1px 1px 0px rgba(0, 0, 0, 1)'
        ]
        },
      colors: {
        ori: {
          50: '#FDF2ED',
          100: '#F9D7C8',
          200: '#F5BCA3',
          300: '#F1A17E',
          400: '#ED865A',
          500: '#E96B35',
          600: '#DC5318',
          700: '#B84514',
          800: '#933710',
          900: '#6E2A0C',
          950: '#491C08',
          975: '#250E04'
        },
      }
    }
  },
}