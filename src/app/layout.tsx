import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import TheNavbar from "./components/UI/TheNavbar";
import TheFooter from "./components/UI/TheFooter";

const font = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trekking Mountain Nepal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
      </head>
      <body suppressHydrationWarning className={font.className}>
        <TheNavbar />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
