import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lumina — Practical Digital Skills Training",
    template: "%s · Lumina",
  },
  description: site.description,
  keywords: [
    "digital skills course",
    "graphic design course",
    "web development course",
    "UI UX course",
    "SEO course",
    "digital skills training",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Lumina — Practical Digital Skills Training",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina — Practical Digital Skills Training",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full max-w-full overflow-x-clip scroll-smooth antialiased`}
    >
      <body className="min-h-full w-full max-w-full overflow-x-clip bg-paper font-sans text-ink">
        <a
          href="#main"
          className="sr-only cursor-pointer focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-[10px] focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
