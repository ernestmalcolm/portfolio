import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { FloatingNav } from "@/components/floating-nav";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteFooter } from "@/components/sections/site-footer";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Ernest Mwinchumu — Product & business strategist who builds",
    template: "%s | Ernest Mwinchumu",
  },
  description:
    "Strategy, product, design, and AI — grounded in real business, shipped in code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          value={{ dark: "", light: "light" }}
        >
          <FloatingNav />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
