import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ROSI | Robotics Open Source International',
  description:
    'ROSI - Robotics Open Source International is a platform for FIRST teams to share knowledge globally through presentations, CAD files, code, and more, raising team performance worldwide.',
  openGraph: {
    title: 'ROSI | Robotics Open Source International',
    description:
      'ROSI - Robotics Open Source International is a platform for FIRST teams to share knowledge globally through presentations, CAD files, code, and more, raising team performance worldwide.',
    url: 'https://rosi.co.il',
    type: 'website',
    siteName: 'ROSI',
    images: [
      {
        url: 'https://rosi.co.il/_next/image?url=%2Fimages%2Fdark_rosi.png&w=1200&q=75',
        width: 1200,
        height: 630,
        alt: 'ROSI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROSI | Robotics Open Source International',
    description:
      'ROSI - Robotics Open Source International is a platform for FIRST teams to share knowledge globally through presentations, CAD files, code, and more, raising team performance worldwide.',
    images: [
      {
        url: 'https://rosi.co.il/_next/image?url=%2Fimages%2Fdark_rosi.png&w=1200&q=75',
        alt: 'ROSI Logo',
      },
    ],
    site: '@YourTwitterHandle', // Replace with your Twitter handle
    creator: '@YourTwitterHandle', // Replace with your Twitter handle
  },
  alternates: {
    canonical: 'https://rosi.co.il',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer style={{ marginTop: '10vh' }} />
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <div className="mt-10"></div>
        {children}
        <Footer />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''}
        />
      </body>
    </html>
  );
}
