import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abul Hasnat - Software Engineering Team Lead',
  description:
    'Software Engineering Team Lead with 5+ years of experience in serverless applications and AWS cloud solutions. Passionate about building scalable architectures and leading development teams.',
  keywords: [
    'Software Engineer',
    'Team Lead',
    'AWS',
    'Serverless',
    'Lambda',
    'DynamoDB',
    'Node.js',
    'React',
    'TypeScript',
    'Full Stack Developer',
    'Cloud Solutions',
    'Dhaka',
    'Bangladesh',
  ],
  authors: [{ name: 'Abul Hasnat' }],
  creator: 'Abul Hasnat',
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
    url: 'https://abulhasnat.dev',
    title: 'Abul Hasnat - Software Engineering Team Lead',
    description:
      'Software Engineering Team Lead specializing in serverless technologies and AWS cloud solutions',
    siteName: 'Abul Hasnat Portfolio',
    images: [
      {
        url: '/favicon-512.svg',
        width: 512,
        height: 512,
        alt: 'Abul Hasnat - AH Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abul Hasnat - Software Engineering Team Lead',
    description:
      'Software Engineering Team Lead specializing in serverless technologies and AWS cloud solutions',
    images: ['/favicon-512.svg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
