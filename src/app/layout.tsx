import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({
  variable: "--roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thoem Songheng",
  description: "Thoem Songheng's portfolio site.",
  robots: { index: true, follow: true },
  keywords: [
    "React JS Dev",
    "Web Developer",
    "Developer",
    "Next JS",
    "Cambodia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
