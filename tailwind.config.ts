import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: "var(--header)",
        input: "var(--input)",
        card: "var(--card)",
      },
      fontFamily: {
        body: ["Poppins"],
        heading: ["Nunito"],
      },
    },
  },
  plugins: [],
} satisfies Config;
