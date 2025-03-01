import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Common/header";
import Footer from "@/components/Common/footer";
import { CartProvider } from "@/context/cartcontext";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
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
        <Header /> <CartProvider>{children}</CartProvider>
        <Footer />{" "}
      </body>
    </html>
  );
}
