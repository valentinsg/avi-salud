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
  icons: {
    icon: "/images/logo-avi.png",
    shortcut: "/images/logo-avi.png",
    apple: "/images/logo-avi.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1434680874460440');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${cocogoose.variable} ${acumin.variable}`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
