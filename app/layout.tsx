import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nolaweddingpainter.com"),
  title: {
    default: "NOLA Wedding Painter | Live Wedding Paintings by Andrew Wilkie",
    template: "%s | NOLA Wedding Painter"
  },
  description:
    "Luxury live wedding painting in New Orleans by Andrew Wilkie, a professional artist creating fine art heirlooms and guest experiences in real time.",
  keywords: [
    "Wedding Painter New Orleans",
    "Live Wedding Painter New Orleans",
    "New Orleans Wedding Artist",
    "Louisiana Wedding Painter",
    "Destination Wedding Painter",
    "Live Event Painter New Orleans",
    "Luxury Wedding Painter",
    "NOLA Wedding Painter"
  ],
  openGraph: {
    title: "NOLA Wedding Painter | Andrew Wilkie",
    description:
      "Live wedding paintings that become family heirlooms, created during your celebration in New Orleans and beyond.",
    type: "website",
    url: "https://nolaweddingpainter.com",
    siteName: "NOLA Wedding Painter",
    images: [
      {
        url: "/images/wedding-painting-01.png",
        width: 1200,
        height: 800,
        alt: "Live wedding painting by Andrew Wilkie"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
