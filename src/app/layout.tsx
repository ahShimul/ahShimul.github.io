import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iamhasnat.com'),
  title: {
    default: 'Abul Hasnat - Software Engineering Team Lead | AWS Expert',
    template: '%s | Abul Hasnat - Software Engineering Team Lead',
  },
  description:
    'Experienced Software Engineering Team Lead specializing in serverless applications, AWS cloud solutions, and full-stack development. 5+ years building scalable microservices with Node.js, React, and TypeScript. Based in Dhaka, Bangladesh.',
  keywords: [
    'Software Engineer',
    'Team Lead',
    'AWS Expert',
    'Serverless Computing',
    'AWS Lambda',
    'DynamoDB',
    'Node.js Developer',
    'React Developer',
    'TypeScript',
    'Full Stack Developer',
    'Cloud Architecture',
    'Microservices',
    'DevOps',
    'Software Architecture',
    'Team Leadership',
    'Agile Development',
    'RESTful APIs',
    'Frontend Development',
    'Backend Development',
    'Dhaka Bangladesh',
    'Remote Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Abul Hasnat', url: 'https://www.iamhasnat.com' }],
  creator: 'Abul Hasnat',
  publisher: 'Abul Hasnat',
  alternates: {
    canonical: 'https://www.iamhasnat.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-512.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon-512.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.iamhasnat.com',
    title: 'Abul Hasnat - Software Engineering Team Lead | AWS Expert',
    description:
      'Experienced Software Engineering Team Lead specializing in serverless technologies, AWS cloud solutions, and full-stack development. 5+ years building scalable applications.',
    siteName: 'Abul Hasnat - Portfolio',
    images: [
      {
        url: '/favicon-512.svg',
        width: 512,
        height: 512,
        alt: 'Abul Hasnat - Software Engineering Team Lead Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abul Hasnat - Software Engineering Team Lead | AWS Expert',
    description:
      'Experienced Software Engineering Team Lead specializing in serverless technologies, AWS cloud solutions, and full-stack development.',
    images: ['/favicon-512.svg'],
    creator: '@abulhasnat', // Add your Twitter handle here
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code', // Add if needed
    // bing: 'your-bing-verification-code', // Add if needed
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abul Hasnat',
    jobTitle: 'Software Engineering Team Lead',
    description:
      'Experienced Software Engineering Team Lead specializing in serverless applications, AWS cloud solutions, and full-stack development.',
    url: 'https://www.iamhasnat.com',
    image: 'https://www.iamhasnat.com/favicon-512.svg',
    sameAs: [
      'https://github.com/ahshimul',
      'https://www.linkedin.com/in/a-hasnat-shimul',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh',
    },
    knowsAbout: [
      'Software Engineering',
      'Team Leadership',
      'AWS',
      'Serverless Computing',
      'Node.js',
      'React',
      'TypeScript',
      'Full Stack Development',
      'Cloud Architecture',
      'Microservices',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Software Engineering Team Lead',
    },
  };

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
