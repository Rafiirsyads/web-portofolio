import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafi Irsyad | Portfolio",
  description: "Personal website portfolio of Rafi Irsyad Saharso"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-background text-white ${inter.className}`}>{children}</body>
    </html>
  );
}
