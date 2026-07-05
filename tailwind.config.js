/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: "#00ff41",
        "accent-dim": "#00cc33",
        terminal: {
          bg: "#0a0e0d",
          card: "rgba(0, 255, 65, 0.03)",
          border: "rgba(0, 255, 65, 0.15)",
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
