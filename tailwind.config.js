/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "mobile-header": "url('/assets/mobile/bg-header.svg')",
        "form-topBar": "url('/assets/mobile/bg-sidebar.svg')",
        "mobile-footer": "url('/assets/mobile/bg-footer.svg')",
        "desktop-header": "url('/assets/desktop/bg-header.svg')",
        "form-sidebar": "url('/assets/desktop/bg-sidebar.svg')",
        "desktop-footer": "url('/assets/desktop/bg-footer.svg')",
        "tablet-header": "url('/assets/tablet/bg-header.svg')",
      },
      colors: {
        "main-dark": "#121721",
        "secondary-dark": "#19202d",
        "off-white": "#f4f6f8",
        "main-gray": "#9daec2",
        "dark-gray": "#6e8098",
        "main-violet": "#6064e4",
        "light-violet": "#939bf4",
      },
      fontFamily: {
        main: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
