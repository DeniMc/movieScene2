import { Inter } from "next/font/google";
import '../styles/globals.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Providers from "./Providers";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieScene",
  description: "My Movie Database CLone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header />
        <Navbar />
        {/* 👇 Suspense for any client-side only features */}
         <Suspense fallback={null}>
            <SearchBox />
          </Suspense>
        {children}
        </Providers>
        </body>
    </html>
  );
}
