import type { Metadata } from "next";
import { Anton, Rubik } from "next/font/google";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Redefine 2026",
  description: "Redefine 2026 - Frontend Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-[#080608] text-white`}>{children}</body>
    </html>
  );
}
