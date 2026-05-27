import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "N-DO'ABLE – A Pinnacle Consultancy | Advocating Excellence in Organizational L&D",
  description:
    "We take you through a Life's Learning Adventure of Empowering organizations and professionals through transformational learning, leadership development, future-ready skills, and experiential training solutions.",
  keywords: [
    "Corporate Life Skills",
    "Leadership Development",
    "Management Development",
    "AI Future Tech Awareness",
    "Employee Engagement Programs",
    "Outbound Adventure Learning",
    "Sales Customer Excellence",
    "Team Building Workshops",
    "Campus to Corporate Programs",
    "Coimbatore Consulting",
    "L&D Consultancy"
  ],
  authors: [{ name: "N-DO'ABLE" }],
  robots: "index, follow"
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col" style={{ background: "#ffffff", color: "#1a2b5e" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
