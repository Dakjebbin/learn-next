import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'netflixBG': 'url("/netfix background.webp")',
        'heroBg': 'url("/BG.png")',
      },
      screens: {
        'max-xs': {'max': '480px'},   // Up to 480px
        'max-sm': {'max': '640px'},   // Up to 640px
        'max-md': {'max': '768px'},   // Up to 768px
        'max-lg': {'max': '1024px'},  // Up to 1024px
        'max-xl': {'max': '1280px'},  // Up to 1280px
        'max-2xl': {'max': '1536px'},
      }
    },
  },
  plugins: [],
} satisfies Config;
