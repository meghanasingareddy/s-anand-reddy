import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. S. Anand Reddy — Managing Director, Sagar Cements Limited",
  description: "Executive portfolio of Dr. S. Anand Reddy, Managing Director of Sagar Cements Limited. Guiding enterprise scale, sustainable manufacturing, and industrial leadership.",
  keywords: ["Dr. S. Anand Reddy", "Sagar Cements", "Managing Director", "Executive Portfolio", "Industrial Leadership", "Cement Manufacturing"],
  openGraph: {
    title: "Dr. S. Anand Reddy — Executive Portfolio",
    description: "Managing Director • Sagar Cements Limited | Strategic growth, capacity expansion & sustainable manufacturing.",
    images: [{ url: "/anand-reddy.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body className="antialiased bg-[#0B0E14] text-[#F4EFE6] selection:bg-[#C5A880] selection:text-[#0B0E14]">
        {children}
      </body>
    </html>
  );
}
