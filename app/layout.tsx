import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Roognis',
    template: '%s | Roognis',
  },
  description: 'AI-powered support for founders & intrapreneurs.',
  openGraph: {
    title: 'Roognis',
    description: 'AI-powered support for founders & intrapreneurs.',
    url: 'https://roognis.netlify.app',
    siteName: 'Roognis',
    images: [
      {
        url: 'https://roognis.netlify.app/favicon.svg',
        width: 64,
        height: 64,
        alt: 'Roognis logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1F1F1F] text-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
