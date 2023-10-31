/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: theme => ({
                ...theme("colors"),
                "bitcoin-orange": "#F7931A",
                "soft-orange": "#FFE9D5",
                "secondary-blue": "#1A9AF7",
                "soft-blue": "#E7F5FF",
                "warm-black": "#201E1C",
                "black": "#282623",
                "grey": "#BABABA",
                "just-white": "#FFF"
            }),
            colors: {
                "bitcoin-orange": "#F7931A",
                "soft-orange": "#FFE9D5",
                "secondary-blue": "#1A9AF7",
                "soft-blue": "#E7F5FF",
                "warm-black": "#201E1C",
                "black": "#282623",
                "grey": "#BABABA",
                "just-white": "#FFF"
            },
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"],
                DMSans: ['DM Sans', "sans-serif"],
                Inter: ['Inter', "sans-serif"]
            }
        },
        screens: {
            "xs": "350px",
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
} 