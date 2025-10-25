import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-muted": "var(--color-surface-muted)",
        foreground: "var(--color-text-primary)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        divider: "var(--color-divider)",
        border: "var(--color-divider)",
        input: "var(--color-input)",
        ring: "var(--color-focus-ring)",
        link: "var(--color-link)",
        "link-hover": "var(--color-link-hover)",
        focus: "var(--color-focus-ring)",
        primary: "var(--color-link)",
        "primary-foreground": "var(--color-link-contrast)",
        secondary: "var(--color-surface-muted)",
        "secondary-foreground": "var(--color-text-primary)",
        muted: "var(--color-surface-muted)",
        "muted-foreground": "var(--color-text-secondary)",
        accent: {
          DEFAULT: "var(--color-accent-500)",
          50: "var(--color-accent-50)",
          100: "var(--color-accent-100)",
          200: "var(--color-accent-200)",
          300: "var(--color-accent-300)",
          400: "var(--color-accent-400)",
          500: "var(--color-accent-500)",
          600: "var(--color-accent-600)",
          700: "var(--color-accent-700)",
          800: "var(--color-accent-800)",
          900: "var(--color-accent-900)"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"]
      },
      spacing: {
        "2xs": "var(--space-2xs)",
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
        gutter: "var(--space-gutter)"
      },
      maxWidth: {
        container: "var(--size-container-max)"
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)"
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(10, 24, 55, 0.25)"
      },
      transitionDuration: {
        short: "var(--motion-duration-short)",
        medium: "var(--motion-duration-medium)"
      },
      transitionTimingFunction: {
        standard: "var(--motion-ease-standard)",
        emphasized: "var(--motion-ease-emphasized)"
      }
    }
  }
};

export default config;
