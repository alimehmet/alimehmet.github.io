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

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  // Primary Meta Tags
  title: {
    default: "Mehmet Ali Ongan | Software Engineer - Backend Developer & Database Expert",
    template: "%s | Mehmet Ali Ongan",
  },
  description:
    "Mehmet Ali Ongan - Senior Software Engineer specializing in SQL & Database Design, Java Spring Backend Development, DevOps (Docker, GitLab CI/CD), and Cloud Platforms (AWS, Elasticsearch). Based in Istanbul, Turkey. Available for hire.",
  
  // Comprehensive Keywords for SEO
  keywords: [
    // Name variations
    "Mehmet Ali Ongan",
    "M. Ali Ongan",
    "Ali Ongan",
    "Ongan",
    "maliongan",
    
    // Job titles
    "Software Engineer",
    "Backend Developer",
    "Senior Software Engineer",
    "Database Developer",
    "Database Administrator",
    "DBA",
    "DevOps Engineer",
    "Full Stack Developer",
    "Java Developer",
    "Spring Developer",
    
    // Technical Skills - Databases
    "SQL Expert",
    "SQL Developer",
    "Database Design",
    "Database Optimization",
    "MySQL Developer",
    "PostgreSQL Developer",
    "MSSQL Developer",
    "Oracle Database",
    "MariaDB",
    "Relational Database",
    "Database Architecture",
    "Query Optimization",
    "Database Performance Tuning",
    
    // Technical Skills - Backend
    "Java Developer",
    "Java Spring",
    "Spring Boot",
    "Spring Framework",
    "Backend Development",
    "REST API",
    "Microservices",
    "API Development",
    
    // Technical Skills - DevOps
    "DevOps",
    "CI/CD",
    "Docker",
    "Containerization",
    "GitLab CI",
    "Jenkins",
    "SonarQube",
    "Code Quality",
    "Continuous Integration",
    "Continuous Deployment",
    
    // Technical Skills - Cloud & Systems
    "AWS",
    "Amazon Web Services",
    "Cloud Computing",
    "Elasticsearch",
    "Linux",
    "Ubuntu",
    "Server Administration",
    "System Administration",
    
    // Technical Skills - Other
    "Python Developer",
    "Python Scripting",
    "Automation",
    "Machine Learning",
    "Computer Vision",
    
    // Location
    "Istanbul",
    "Turkey",
    "İstanbul",
    "Türkiye",
    "Software Engineer Istanbul",
    "Developer Turkey",
    
    // Services
    "Freelance Developer",
    "Software Consultant",
    "Database Consultant",
    "Technical Consultant",
    "Hire Software Engineer",
    "Hire Backend Developer",
    "Hire Database Expert",
  ],
  
  // Authors and Creator
  authors: [
    { name: "Mehmet Ali Ongan", url: "https://alimehmet.github.io" },
  ],
  creator: "Mehmet Ali Ongan",
  publisher: "Mehmet Ali Ongan",
  
  // Metadata Base URL
  metadataBase: new URL("https://alimehmet.github.io"),
  
  // Alternate URLs
  alternates: {
    canonical: "https://alimehmet.github.io",
  },
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    url: "https://alimehmet.github.io",
    siteName: "Mehmet Ali Ongan - Software Engineer Portfolio",
    title: "Mehmet Ali Ongan | Software Engineer - Backend Developer & Database Expert",
    description:
      "Senior Software Engineer specializing in SQL & Database Design, Java Spring Backend Development, DevOps, and Cloud Platforms. Based in Istanbul, Turkey.",
    images: [
      {
        url: "/img/logo/mali_anonim.png",
        width: 500,
        height: 500,
        alt: "Mehmet Ali Ongan - Software Engineer Logo",
        type: "image/png",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Mehmet Ali Ongan | Software Engineer - Backend Developer & Database Expert",
    description:
      "Senior Software Engineer specializing in SQL & Database Design, Java Spring Backend Development, DevOps, and Cloud Platforms. Istanbul, Turkey.",
    images: ["/img/logo/mali_anonim.png"],
    creator: "@maliongan",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (add your verification codes here)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  // Category
  category: "technology",
  
  // Classification
  classification: "Software Engineering Portfolio",
  
  // Other metadata
  applicationName: "Mehmet Ali Ongan Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
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

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mehmet Ali Ongan",
  alternateName: ["Ali Ongan", "M. Ali Ongan", "maliongan"],
  description: "Senior Software Engineer specializing in SQL & Database Design, Java Spring Backend Development, DevOps, and Cloud Platforms.",
  url: "https://alimehmet.github.io",
  image: "https://alimehmet.github.io/img/logo/mali_anonim.png",
  email: "maliongan@hotmail.com",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Open to Opportunities",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Istanbul",
    addressCountry: "Turkey",
  },
  sameAs: [
    "https://www.linkedin.com/in/maliongan/",
    "https://github.com/alimehmet",
    "https://www.hackerrank.com/maliongan/",
  ],
  knowsAbout: [
    "SQL",
    "Database Design",
    "Java",
    "Spring Framework",
    "DevOps",
    "Docker",
    "CI/CD",
    "AWS",
    "Elasticsearch",
    "Linux",
    "Python",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Mehmet Ali Ongan" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Istanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />
        <link rel="canonical" href="https://alimehmet.github.io" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen cursor-default`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
