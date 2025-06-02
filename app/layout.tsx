import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundProvider } from "@/providers/BackgroundProvider";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Smith | Development, Product, and Design",
  description: "Building digital experiences",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="nord">
      <body className={`${inter.className}`}>
        <BackgroundProvider>
          <Navbar />
          <main>{children}</main>
          <SpeedInsights />
          <GoogleAnalytics />
        </BackgroundProvider>
      </body>
    </html>
  );
}
