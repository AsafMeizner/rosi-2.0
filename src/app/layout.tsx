import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROSI | Robotics Open Source International",
  description: "ROSI - Robotics Open Source International is A platform for FIRST teams to share knowledge globally through presentations, CAD files, code, and more, raising team performance worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title) ?? ''}</title>
        <meta name="description" content={metadata.description ?? undefined} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={String(metadata.title) || undefined} />
        <meta property="og:description" content={String(metadata.description) || undefined} />
        <meta property="og:image" content="https://rosi.co.il/_next/image?url=%2Fimages%2Fdark_rosi.png&w=1200&q=75" />
        <meta property="og:url" content="https://rosi.co.il" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ROSI" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={String(metadata.title) ?? undefined} />
        <meta name="twitter:description" content={metadata.description ?? undefined} />
        <meta name="twitter:image" content="https://rosi.co.il/_next/image?url=%2Fimages%2Fdark_rosi.png&w=1200&q=75" />
        <meta name="twitter:site" content="@YourTwitterHandle" /> {/* Replace with your Twitter handle */}
        <meta name="twitter:creator" content="@YourTwitterHandle" /> {/* Replace with your Twitter handle */}
      </head>
      <body className={inter.className}>
        <ToastContainer style={{ marginTop: "10vh" }} />
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <div className="mt-10"></div>
        {children}
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''} />
      </body>
    </html>
  );
}
