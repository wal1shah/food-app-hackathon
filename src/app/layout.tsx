import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Common/header";
import Footer from "@/app/components/Common/footer";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
