import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. The "Rich" Serif Font for Headlines
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif" 
});

// 2. The "Clean" Sans Font for UI/Body
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

// 3. The "Code" Font for Technical Details
const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Antinotes | Master Algorithmic Thinking",
  description: "The adaptive AI tutor for Data Structures & Algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} bg-[#FDFCF8] text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}