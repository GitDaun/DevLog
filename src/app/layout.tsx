import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import "./globals.css";
import Header from './Header'

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
});


export const metadata: Metadata = {
  title: "Devlog of Daun",
  description: "FE 정다운의 개발 블로그",
  icons: {
    icon: [
      {
        url: "/favicon16.jpg",
        type: "image/jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourGummy.variable}  antialiased p-4`} >
        <Header/>
        {children}
      </body>
    </html>
  );
}
