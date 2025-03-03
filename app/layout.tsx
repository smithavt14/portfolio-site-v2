import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@components/Navbar';
import GoogleAnalytics from '@components/GoogleAnalytics';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { BackgroundProvider } from '@/providers/BackgroundProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alex Smith | Development, Product, and Design',
  description: 'Building digital experiences',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en" className="dark">
      <ThemeProvider>
        <BackgroundProvider>
          <body className={`${inter.className} inset-0 select-none bg-background text-foreground min-h-dvh`}>
            <Navbar />
            <main>{children}</main>
            <SpeedInsights />
            <GoogleAnalytics />
          </body>
        </BackgroundProvider>
      </ThemeProvider>
    </html>
  );
} 