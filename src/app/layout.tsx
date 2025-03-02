import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";

const sourGummy = Sour_Gummy({
  subsets: ['latin', 'latin-ext'],
  variable: "--font-sour-gummy",
  display: 'swap',
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
      <head suppressHydrationWarning>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${sourGummy.variable} antialiased p-4 bg-white dark:bg-gray-900 dark:text-white`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
