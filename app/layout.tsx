import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Preloader from '@/components/Preloader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DigitalPro - Premium Digital Marketing Agency',
  description: 'Transform your business with our expert digital marketing services. SEO, PPC, Social Media, and Web Development solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader />
        <Navbar />
        <main className="min-h-screen bg-slate-900">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}