
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx,md}',
      './src/*.{html,js,jsx,ts,tsx,md}'],
    safelist: [
      'w-64',
      'w-1/2',
      'rounded-l-lg',
      'rounded-r-lg',
      'bg-gray-200',
      'grid-cols-4',
      'grid-cols-7',
      'h-6',
      'leading-6',
      'h-9',
      'leading-9',
      'shadow-lg'
    ],
    darkMode: 'class',
    theme: {
      fontFamily: {
        'sans': ["'Atkinson Hyperlegible'", "sans"]
      },
      colors: {
        transparent: 'transparent',
        'primary': {
          50: '#F1F0FE',
          100: '#E2E1FE',
          200: '#C5C3FC',
          300: '#A9A6FB',
          400: '#8C88F9',
          500: '#6F6AF8',
          600: '#5A55D2',
          700: '#4441AB',
          800: '#2F2C85',
          900: '#19185E'
        },
        'secondary': {
          50: '#EFFCFC',
          100: '#DFF9F9',
          200: '#BFF3F3',
          300: '#A0EDEC',
          400: '#80E7E6',
          500: '#60E1E0',
          600: '#4EB8B7',
          700: '#3B8F8F',
          800: '#296766',
          900: '#163E3E'
        },
        'success': {
          50: '#EAF6EF',
          100: '#D6EDDE',
          200: '#ADDBBD',
          300: '#83C99C',
          400: '#5AB77B',
          500: '#31A55A',
          600: '#278448',
          700: '#1D6336',
          800: '#144224',
          900: '#0A2112'
        },
        'warning': {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F'
        },
        'error': {
          50: '#FCE9E9',
          100: '#F9D3D3',
          200: '#F3A7A7',
          300: '#EE7A7A',
          400: '#E84E4E',
          500: '#E22222',
          600: '#B51B1B',
          700: '#881414',
          800: '#5A0E0E',
          900: '#2D0707'
        },
      },
      container: {
        padding: "2rem"
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem"
      },
      extend: {
        spacing: {
          "72": "18rem",
          "84": "21rem",
          "96": "24rem"
        },
        maxWidth: {
          "1/4": "25%",
          "1/2": "50%",
          "3/4": "75%",
          "9/10": "90%"
        },
        translate: {
          double: "200%",
          triple: "300%",
          quad: "400%"
        },
        height: {
          "2px": "2px"
        },
        inset: {
          "24": "5rem", // not for real
          "1/2": "50%",
          full: "100%"
        },
        transitionProperty: {
          width: "width"
        }
      }
    },
    plugins: [require('flowbite/plugin')]
    };
  