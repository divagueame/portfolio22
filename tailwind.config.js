module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
    theme: {
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
        ]
      }
    }
  },
}