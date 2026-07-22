import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header/Header";
import Providers from "@/providers/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description: "Campers App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
