import { Poppins, Inter, Roboto, Work_Sans, Public_Sans } from "next/font/google";

export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins-sans" });
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter-sans" });
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto-sans" });
export const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-workSans-sans" });
export const PublicSans = Public_Sans({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-publicSans-sans" });