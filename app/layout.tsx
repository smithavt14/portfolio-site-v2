import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundProvider } from "@/providers/BackgroundProvider";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import { getRandomTheme } from "@/lib/theme-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Smith | Development, Product, and Design",
  description: "Building digital experiences",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate a random theme on the server side to prevent hydration mismatch
  const initialTheme = "lofi";

  return (
    <html lang="en" data-theme={initialTheme}>
      <body className={`${inter.className}`}>
        <BackgroundProvider>
          <Navbar />
          <main className="pt-[var(--navbar-height-mobile)] md:pt-[var(--navbar-height)]">{children}</main>
          <Footer />
        </BackgroundProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
