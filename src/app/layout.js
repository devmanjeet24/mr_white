import { Geist, Geist_Mono } from "next/font/google";
import { poppins, inter, roboto, workSans, PublicSans } from "@/lib/fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} ${roboto.variable} ${workSans.variable} ${PublicSans.variable} antialiased bg-[#0b0b0b]`}
      >
        {children}
      </body>
    </html>
  );
}