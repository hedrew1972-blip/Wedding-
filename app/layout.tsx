import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Orleans Live Wedding Painter | NOLA Wedding Painter | Andrew Wilkie",
  description:
    "Atmospheric live wedding painting in New Orleans by Andrew Wilkie. A memorable guest experience and heirloom artwork created during your celebration.",
  openGraph: {
    title: "NOLA Wedding Painter | Andrew Wilkie",
    description:
      "Live wedding painting in New Orleans with warmth, movement, and soul.",
    type: "website",
    url: "https://nolaweddingpainter.com"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
