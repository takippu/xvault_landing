import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Font Awesome is used for icons in the landing page
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "xVault - Manage, Copy and Paste Your Snippets Easily",
  description: "xVault - The ultimate text snippet manager for Chrome that securely stores your frequently used text with end-to-end encryption.",
  keywords: "text snippet manager, chrome extension, secure snippets, code snippets, encryption",
  authors: [{ name: "xVault" }],
};

export const viewport: Viewport = {
  themeColor: "#ff6380",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="google-site-verification" content="e7-qmPzeQhE7U0WbsblhVLTuSHYjMyM0UDJO7rnIirU" />
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/icon/xvault.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon/48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon/96x96.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/icon/128x128.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Font Awesome */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
