import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from "next/font/google";
import ModalProvider from "@/components/Modals/ModalProvider";
import { headers } from 'next/headers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'LinkFolio - Your Bio Link Platform',
  description: 'Share all your content with just one bio link',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-white via-white to-[#C4E2F7] min-h-screen relative`}
      >
        {/* Background decoration elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#C4E2F7]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C4E2F7]/20 rounded-full blur-3xl"></div>
        </div>
        
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  )
}
