import daisyui from "daisyui";
import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Sử dụng Roboto cho font sans
      },
    },
  },
  plugins: [daisyui, scrollbar],
};
