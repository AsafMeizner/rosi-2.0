import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROSI | Robotics Open Source International",
  description: "ROSI - Robotics Open Source International Is an Open Source project aimed at creating a common infrastructure among all FIRST teams internationally. You can upload presentations, CAD files, code scenes, photographed lectures and more. So that any team can learn from the other teams while sharing its knowledge When the situation the site strives to promote is raising the level of all teams internationally. In all topics, from the establishment of community and media projects, through software and code to Manufacturing and engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ROSI | Robotics Open Source International</title>
        <meta name="description" content={metadata.description || "Default description"} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={String(metadata.title) ?? ''} />
        <meta property="og:description" content={metadata.description ?? ''} />
        <meta property="og:image" content="https://rosi.co.il/_next/image?url=%2Fimages%2Fdark_rosi.png&w=1200&q=75" />
        <meta property="og:url" content="https://rosi.co.il" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ROSI" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={String(metadata.title) ?? ''} />
        <meta name="twitter:description" content={metadata.description ?? ''} />
        <meta name="twitter:image" content="https://rosi.co.il/_next/image?url=%2Fimages%2Fdark_rosi.png&w=1200&q=75" />
        <meta name="twitter:site" content="@YourTwitterHandle" /> {/* Replace with your Twitter handle */}
        <meta name="twitter:creator" content="@YourTwitterHandle" /> {/* Replace with your Twitter handle */}
      </head>
      <body className={inter.className}>
        <ToastContainer style={{marginTop: "10vh"}}/>
        <Analytics />
        <SpeedInsights/>
        <Navbar />
        <div className="mt-10"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
