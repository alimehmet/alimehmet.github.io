import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehmet Ali Ongan | Software Developer Portfolio",
  description:
    "Portfolio of Mehmet Ali Ongan - Software Developer specializing in Machine Learning, Computer Vision, and Python development. Based in Istanbul, Turkey.",
  keywords: [
    "Mehmet Ali Ongan",
    "Software Developer",
    "Machine Learning",
    "Computer Vision",
    "Python",
    "YoloV3",
    "Istanbul",
    "Portfolio",
  ],
  authors: [{ name: "Mehmet Ali Ongan" }],
  creator: "Mehmet Ali Ongan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mehmet Ali Ongan | Software Developer Portfolio",
    description:
      "Portfolio of Mehmet Ali Ongan - Software Developer specializing in Machine Learning, Computer Vision, and Python development.",
    siteName: "Ongan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehmet Ali Ongan | Software Developer Portfolio",
    description:
      "Portfolio of Mehmet Ali Ongan - Software Developer specializing in Machine Learning, Computer Vision, and Python development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen cursor-default`}
      >
        {children}
      </body>
    </html>
  );
}
