import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider as NextThemesProvider } from "@/components/theme-provider";
import { ThemeProvider } from "@/contexts/theme-context";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Static Site',
  description: 'A modern static site built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}