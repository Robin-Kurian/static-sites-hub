import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "@/components/theme-provider";
import { ThemeProvider } from "@/contexts/theme-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://robink.netlify.app"), // Replace with your actual website URL
  title: "Themeify - Modern Website Templates",
  description:
    "Beautiful, customizable website templates demo",
  keywords: "Next.js, Tailwind CSS, templates, modern website, customizable",
  authors: [{ name: "Robin K", url: "https://robink.netlify.app" }],
  openGraph: {
    title: "Themeify - Modern Website Templates",
    description:
      "Beautiful, customizable website templates demo",
    url: "https://robink.netlify.app",
    siteName: "Themeify",
    images: [
      {
        url: "https://robink.netlify.app/favicon.ico", 
        width: 800,
        height: 600,
        alt: "Themeify Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Themeify - Modern Website Templates",
    description:
      "Beautiful, customizable website templates built with Next.js and Tailwind CSS",
    images: ["https://robink.netlify.app/favicon.ico"], // Replace with your logo URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
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
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
