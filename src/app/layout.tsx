import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import "./globals.css";
import Header from './Header'

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
});


export const metadata: Metadata = {
  title: "Devlog of Daun",
  description: "프론트엔드 개발자 정다운의 개발 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourGummy.variable}  antialiased px-[10%]`} >
        <Header/>
        {children}
      </body>
    </html>
  );
}
