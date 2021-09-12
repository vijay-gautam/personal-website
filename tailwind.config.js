module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            epl: ['Epilogue', 'sans-serif'],
            bio: ['BioRhyme', 'serif'],
        },
        extend: {
            colors: {
                default: '#6C63FF',
                dark: '#1a1919',
                selection: '#ff5252',
                darkText: '#bebebe',
            },
        },
        height: {
            100: '35rem',
        },
        transitionDuration: {
            30: '30ms',
        },
        transitionProperty: {
            height: 'height',
        },
    },
    variants: {
        extend: {
            textColor: ['selection'],
            backgroundColor: ['selection'],
            borderStyle: ['hover'],
        },
    },
    plugins: [require('tailwindcss-selection-variant')],
}
