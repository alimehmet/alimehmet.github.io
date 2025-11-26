import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehmet Ali Ongan | Software Engineer",
  description:
    "Software Engineer specializing in SQL & Database Design, Backend Development (Java & Spring), DevOps & CI/CD, and Cloud Platforms. Based in Istanbul, Turkey.",
  keywords: [
    "Mehmet Ali Ongan",
    "Software Engineer",
    "SQL",
    "Database Design",
    "Java",
    "Spring",
    "DevOps",
    "Backend Developer",
    "Istanbul",
  ],
  authors: [{ name: "Mehmet Ali Ongan" }],
  creator: "Mehmet Ali Ongan",
  metadataBase: new URL("https://alimehmet.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alimehmet.github.io",
    title: "Mehmet Ali Ongan | Software Engineer",
    description:
      "Software Engineer specializing in SQL & Database Design, Backend Development (Java & Spring), DevOps & CI/CD, and Cloud Platforms.",
    siteName: "Mehmet Ali Ongan",
    images: [
      {
        url: "/img/logo/mali.png",
        width: 500,
        height: 500,
        alt: "Mehmet Ali Ongan Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehmet Ali Ongan | Software Engineer",
    description:
      "Software Engineer specializing in SQL & Database Design, Backend Development (Java & Spring), DevOps & CI/CD, and Cloud Platforms.",
    images: ["/img/logo/mali.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Script to prevent flash of wrong theme
const themeScript = `
  (function() {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || 'system';
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen cursor-default`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
