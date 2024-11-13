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
