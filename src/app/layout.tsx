import type { Metadata } from "next";
import { Inter, Itim } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Itim({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Tech enthusiast",
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
          {children}
        </Providers>
      </body>
    </html>
  );
}
