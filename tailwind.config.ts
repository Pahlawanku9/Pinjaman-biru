import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dff0ff",
          500: "#1677ff",
          600: "#075fe6",
          700: "#084db5",
          900: "#062d69"
        }
      },
      boxShadow: {
        soft: "0 12px 35px rgba(7, 77, 181, .10)"
      }
    }
  },
  plugins: []
};
export default config;