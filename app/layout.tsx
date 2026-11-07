import { ConsoleMessage } from "@/components/console-message";
import { CameraHeader } from "@/components/doc/camera-header";
import { EndCredits } from "@/components/doc/end-credits";
import { Reception } from "@/components/doc/reception";
import { MotionProvider } from "@/components/motion/providers";
import { siteConfig, siteUrl } from "@/lib/site-config";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";

// Fonts are self-hosted from app/fonts, so a build never depends on Google Fonts being reachable
const plexSans = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans.woff2", weight: "100 700", style: "normal" },
    { path: "./fonts/ibm-plex-sans-italic.woff2", weight: "100 700", style: "italic" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const plexCondensed = localFont({
  src: "./fonts/ibm-plex-sans-condensed-700.woff2",
  weight: "700",
  variable: "--font-plex-condensed",
  display: "swap",
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
  fallback: ["ui-monospace", "Menlo", "monospace"],
});

const reenie = localFont({
  src: "./fonts/reenie-beanie-400.woff2",
  weight: "400",
  variable: "--font-reenie",
  display: "swap",
  fallback: ["cursive"],
});

const defaultTitle = `${siteConfig.name}, ${siteConfig.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title: defaultTitle,
    description: siteConfig.tagline,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.tagline,
    url: siteUrl,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dar es Salaam",
      addressCountry: "TZ",
    },
    alumniOf: "University of Dar es Salaam",
    worksFor: { "@type": "Organization", name: "Simplitech Limited" },
    sameAs: [siteConfig.social.linkedin],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable} ${reenie.variable}`}
      >
        {/* Extensions like Grammarly add attributes to <body> before React hydrates */}
        <body className="flex min-h-screen flex-col" suppressHydrationWarning>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <PersonJsonLd />
          <ConsoleMessage />
          <MotionProvider>
            <CameraHeader />
            <div id="main" className="flex-1 overflow-x-clip">
              {children}
            </div>
            <Reception />
            <EndCredits />
          </MotionProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
