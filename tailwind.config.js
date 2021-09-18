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
                "darkBlue-1": "#23384e",
                "darkBlue-2": "#0d2235",
            },
            fontFamily: {
                'arch': ['Architects Daughter', 'Open Sans']
            }
        },
        
    },
    variants: {
        extend: {
            
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
