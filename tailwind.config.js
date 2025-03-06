/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          light: "#e6f6f4",
          lightHover: "#d9f2ef",
          lightActive: "#b0e4dd",
          normal: "#00a991",
          normalHover: "#009883",
          normalActive: "#008774",
          dark: "#007f6d",
          darkHover: "#006557",
          darkActive: "#004c41",
          darker: "#003B33",
        },
        purple: {
          light: "#eee6f6",
          lightHover: "#e5d9f2",
          lightActive: "#cab0e4",
          normal: "#5400a8",
          normalHover: "#4c0097",
          normalActive: "#430086",
          dark: "#3f007e",
          darkHover: "#320065",
          darkActive: "#26004c",
          darker: "#1d003b",
        },
        black: "#333333",
        "gray-0": "rgba(204, 204, 204, 0.25)",
        "gray-1": "#666666",
        "gray-2": "#999999",
        "gray-3": "#CCCCCC",
        white: "#FFFFFF",
        whiteHover: "#F2F2F2",
      },
    },
    fontFamily: {
      sans: ["outfit", "system-ui"],
      serif: ["outfit", "Georgia"],
      mono: ["outfit", "SFMono-Regular"],
      display: ["outfit"],
      body: ['"outfit"'],
    },
  },
  plugins: [],
};
