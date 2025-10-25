import { PropsWithChildren } from "react";
import { IBM_Plex_Mono, Playfair_Display, Source_Sans_3 } from "next/font/google";
import styles from "./theme-provider.module.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-antikythera-display",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-antikythera-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-antikythera-mono",
});

export type AntikytheraThemeProviderProps = PropsWithChildren<{
  className?: string;
}>;

export function AntikytheraThemeProvider({
  children,
  className,
}: AntikytheraThemeProviderProps) {
  const classes = [
    styles.theme,
    display.variable,
    sans.variable,
    mono.variable,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
