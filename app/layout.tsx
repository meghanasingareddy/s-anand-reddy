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
  title: "Dr. S. Anand Reddy — Head of Learning & Development, Hetero",
  description: "Executive portfolio of Dr. S. Anand Reddy, Head of Learning & Development at Hetero. Over 18 years of experience in Learning and Organizational Development, leadership capability building, and driving continuous learning cultures.",
  keywords: [
    "Dr. S. Anand Reddy",
    "Hetero",
    "Head of Learning & Development",
    "Learning and Development",
    "Organizational Development",
    "Leadership Development",
    "Employee Development",
    "Talent Development",
    "Executive Coaching",
    "ISTD Hyderabad"
  ],
  openGraph: {
    title: "Dr. S. Anand Reddy — Head of Learning & Development, Hetero",
    description: "Experienced HR and Learning & Organizational Development professional with 18+ years of expertise in employee development, transformative leadership, and building learning cultures.",
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
