import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import { ThemeProvider } from 'next-themes'

import "./globals.css";


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
    <html lang="ko" suppressHydrationWarning>
      <body className={`${sourGummy.variable} antialiased p-4 bg-white dark:bg-gray-900 dark:text-white`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
