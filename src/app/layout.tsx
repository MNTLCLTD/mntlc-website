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
  metadataBase: new URL('https://mntlc.ltd'),
  title: {
    default: 'Mental Tender Loving Care',
    template: '%s | Mental Tender Loving Care'
  },
  description: 'MNTLC is redefining the software landscape for the AI era, creating transformative solutions that empower individuals and organizations through vertical-specific applications.',
  keywords: ['AI', 'Autonomous Production Units', 'Innovation', 'Vertical Solutions', 'Human Potential', 'Software Development', 'Artificial Intelligence'],
  authors: [{ name: 'MNTLC Group Ltd' }],
  creator: 'MNTLC Group Ltd',
  publisher: 'MNTLC Group Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      }
    ],
    shortcut: { url: '/icon.png' },
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mntlc.ltd',
    siteName: 'Mental Tender Loving Care',
    title: 'Mental Tender Loving Care',
    description: 'Transforming industries through AI-powered vertical-specific solutions and autonomous production units.',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 1200,
        alt: 'Mental Tender Loving Care',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mental Tender Loving Care',
    description: 'Transforming industries through AI-powered vertical-specific solutions and autonomous production units.',
    images: ['/icon.png'],
    creator: '@mntlc',
    site: '@mntlc',
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
