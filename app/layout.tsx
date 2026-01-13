import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'HeyNouth - Local Discovery',
  description: 'Découvrez les commerces autour de vous.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="antialiased">
      <body className="flex flex-col min-h-screen bg-[var(--color-bg-cream)] text-gray-900">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
