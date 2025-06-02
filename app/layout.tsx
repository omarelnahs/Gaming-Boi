import type { Metadata } from "next";
import React from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat =Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gameing Boi",
  description: "Gameing Boi is a platform for gamers to explore and enjoy various games.",
  keywords: ["gaming", "games", "gameing boi", "gameingboi", "gameingboi.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{montserrat.className} dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
