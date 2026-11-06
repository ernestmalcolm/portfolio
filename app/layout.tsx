import { ConsoleMessage } from "@/components/console-message";
import { CameraHeader } from "@/components/doc/camera-header";
import { EndCredits } from "@/components/doc/end-credits";
import { Reception } from "@/components/doc/reception";
import { MotionProvider } from "@/components/motion/providers";
import { siteConfig, siteUrl } from "@/lib/site-config";

import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Condensed, Reenie_Beanie } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-plex-condensed",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const reenie = Reenie_Beanie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-reenie",
  display: "swap",
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
