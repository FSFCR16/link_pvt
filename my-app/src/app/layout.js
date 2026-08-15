import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PVT Store · Bogotá",
  description: "Ropa importada de marcas de lujo · Punto físico en Bogotá",

  verification: {
    google: "ABC123..." // 👈 pega SOLO el código aquí
  },

  icons: {
    icon: "/images/icon.ico",
    apple: "/images/icon.ico",
  },
  openGraph: {
    title: "PVT Store · Bogotá",
    description: "Ropa importada de marcas de lujo · Punto físico en Bogotá",
    url: "https://link-pvt.vercel.app",
    siteName: "PVT Store",
    images: [
      {
        url: "https://link-pvt.vercel.app/images/logo.png",
        width: 1024,
        height: 1024,
        alt: "PVT Store logo",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PVT Store · Bogotá",
    description: "Ropa importada de marcas de lujo · Punto físico en Bogotá",
    images: ["https://link-pvt.vercel.app/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      
    >
    <head>
      <meta name="google-site-verification" content="d11YeBDFCy367AkMxw48C_jLkkGokaE1Xz4CHAtY2sI" />
    </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
