import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { addressLine, chapter } from "@/data/chapter";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: point at the final production URL once DNS is sorted.
  metadataBase: new URL("https://www.phikappapsi.mit.edu"),
  title: {
    default: `${chapter.name} at ${chapter.school}`,
    template: `%s · ${chapter.name} at ${chapter.school}`,
  },
  description: `${chapter.chapterName} chapter of ${chapter.name} at ${chapter.school}. ${chapter.tagline} ${addressLine}.`,
  openGraph: {
    type: "website",
    siteName: `${chapter.name} at ${chapter.school}`,
    title: `${chapter.name} at ${chapter.school}`,
    description: chapter.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
