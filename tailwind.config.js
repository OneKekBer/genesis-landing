/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontSize: {
         sm: "16px",
         md: "20px",
         lg: "36px",
         xl: "50px",
         "2xl": "1.563rem",
         "3xl": "1.953rem",
         "4xl": "2.441rem",
         "5xl": "3.052rem",
      },
      extend: {
         colors: {
            red: "#D50138",
            blue: "#0026FF",
            violet: "#7502A3  ",
         },
      },
   },
   plugins: [],
};
