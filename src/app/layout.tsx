import type { Metadata } from "next";
import { Roboto, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import Page from "./about/page";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const font2 = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const font3 = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Restaurant App",
  description: "Food Restaurant website using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Header /> {children}
        <Footer />
      </body>
    </html>
  );
}
