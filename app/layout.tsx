import '@styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@components/Navbar';
import GoogleAnalytics from '@components/GoogleAnalytics';
import { ThemeProvider } from '@/providers/ThemeProvider';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alex Smith | Developer',
  description: 'Building digital experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} fixed inset-0 overflow-hidden select-none bg-zinc-50 dark:bg-zinc-950`}>
          <Navbar />
          <main>
            {children}
          </main>
          <GoogleAnalytics />
        </body>
      </ThemeProvider>
    </html>
  );
} 