import type { Metadata } from "next";
import Link from "next/link";
import { Instrument_Serif, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], display: "swap", variable: "--font-serif", weight: ["400"] });

const headerMetaItems = ["Next.js 15", "Tailwind 4", "Antikythera tokens"] as const;

export const metadata: Metadata = {
  title: "chatTelos",
  description: "A Next.js 15 scaffold with Antikythera-inspired tokens and typography foundations."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-divider bg-surface/80 backdrop-blur">
            <div className="mx-auto flex max-w-container items-center justify-between gap-md px-gutter py-md">
              <Link
                href="/"
                className="inline-flex items-center gap-sm text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary transition-colors duration-short ease-standard hover:text-link"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-link text-[0.65rem] font-semibold text-link-contrast">
                  CT
                </span>
                chatTelos
              </Link>
              <nav aria-label="Technology stack" className="hidden md:block">
                <ul className="flex items-center gap-sm text-[0.7rem] uppercase tracking-[0.3em] text-text-secondary">
                  {headerMetaItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>

          <div className="flex-1 bg-background">{children}</div>

          <footer className="border-t border-divider bg-surface/80">
            <div className="mx-auto flex max-w-container flex-col gap-xs px-gutter py-md text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
              <p>© {year} chatTelos foundations.</p>
              <p>Built for Antikythera teams exploring conversational design.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
