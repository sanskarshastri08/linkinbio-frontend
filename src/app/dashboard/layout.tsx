import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - LinkFolio',
  description: 'Manage your LinkFolio links and analytics',
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}>
        {children}
      </body>
    </html>
  )
} 