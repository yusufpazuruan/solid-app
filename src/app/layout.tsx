import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Solid App",
  description: "We are Solid Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   const currentColor = localStorage.getItem('selectedColor') || 'orange';
  //   document.body.className = `theme-${currentColor}`;
  // }, []);

  return (
    <html lang="en">
      <body
        className={cn(
          `min-h-screen bg-background theme-orange`,
          geistSans.variable,
          geistMono.variable,
          poppins.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
