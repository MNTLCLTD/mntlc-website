import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mentalic.ltd'),
  title: {
    default: 'Mentalic - Building for Human Potential',
    template: '%s | Mentalic'
  },
  description: 'Mentalic is redefining the software landscape for the AI era, creating transformative solutions that empower self-discovery, growth, and innovation.',
  keywords: ['AI', 'Mental Health', 'Innovation', 'Healthcare Technology', 'Human Potential', 'Software Development', 'Artificial Intelligence'],
  authors: [{ name: 'Mentalic Group Ltd' }],
  creator: 'Mentalic Group Ltd',
  publisher: 'Mentalic Group Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mentalic.ltd',
    siteName: 'Mentalic',
    title: 'Mentalic - Building for Human Potential',
    description: 'Transforming mental healthcare through AI-driven innovation and personalized solutions.',
    images: [
      {
        url: '/share.svg',
        width: 1200,
        height: 630,
        alt: 'Mentalic - Building for Human Potential',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentalic - Building for Human Potential',
    description: 'Transforming mental healthcare through AI-driven innovation and personalized solutions.',
    images: ['/share.svg'],
    creator: '@mentalic',
    site: '@mentalic',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-light dark:bg-brand-dark min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
