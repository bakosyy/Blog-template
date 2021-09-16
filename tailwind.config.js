const colors = require('tailwindcss/colors')

module.exports = {
    purge: [

    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                teal: colors.teal,
                orange: colors.orange,
                emerald: colors.emerald,
                lime: colors.lime,
                cyan: colors.cyan,
                blueGray: colors.blueGray,
                darkBlue: "#23384e"
            }
        },
    },
    variants: {
        extend: {
        },
    },
    plugins: [],
}
