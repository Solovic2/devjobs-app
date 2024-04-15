/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "mobile-header": "url('assets/mobile/bg-header.svg')",
        "mobile-sidebar": "url('assets/mobile/bg-sidebar.svg')",
        "mobile-footer": "url('assets/mobile/bg-footer.svg')",
        "desktop-header": "url('assets/desktop/bg-header.svg')",
        "desktop-sidebar": "url('assets/desktop/bg-sidebar.svg')",
        "desktop-footer": "url('assets/desktop/bg-footer.svg')",
        "tablet-header": "url('assets/tablet/bg-header.svg')",
      },
    },
  },
  plugins: [],
};
