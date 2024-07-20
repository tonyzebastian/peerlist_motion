/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        boxShadow: {
            'custom-border': '0 0 0 8px #E2F5EA', 
          },

        colors: {
          'custom-green-dark': '#00AA45',
          'custom-green-medium': '#6FCF97', 
          'custom-green-light': '#E2F5EA', 
        },

        fontFamily: {
          'JetBrains': ['JetBrains Mono', 'monospace'],
          'Playfair': ['Playfair Display', 'serif'],
        },
        
      },
    },
    plugins: [],
  }