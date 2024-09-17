/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "act-of-rejection": ['"ActOfRejection", "sans-serif"'],
                inter: ['"Inter", "sans-serif"'],
                "inter-italic": ['"InterItalic", "sans-serif"'],
                montserrat: ['"Montserrat", "sans-serif"'],
                "montserrat-italic": ['"MontserratItalic", "sans-serif"'],
            },
            maxWidth: {
                "screen-3xl": "1920px",
            },
        },
    },
    plugins: [],
};
