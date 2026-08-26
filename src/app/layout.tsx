import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import "./globals.css";

// Stand-in for the licensed "Grinola" display face used in the Figma file.
// Swap this for next/font/local once you have the licensed Grinola font
// files in /public/fonts — see README.md.
const grinola = Cormorant({
  variable: "--font-grinola",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

export const metadata: Metadata = {
  title: "Colheita — Uma família para pertencer",
  description: "Igreja Colheita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${grinola.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
