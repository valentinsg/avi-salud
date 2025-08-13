import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { acumin, cocogoose } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVI Salud",
  description: "AVI Salud - Cuidamos a los que más te cuidaron",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head></head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${cocogoose.variable} ${acumin.variable}`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
