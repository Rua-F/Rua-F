// app/layout.js

import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link'; // ← 추가

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Freelance Data Services',
  description: 'Freelance data services portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-dark-bg text-gray-100 min-h-screen flex flex-col">
        <header className="bg-dark-card border-b border-gray-700 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="font-bold text-xl text-pastel-accent">
              MyPortfolio
            </div>
            <div className="space-x-4 text-sm">
              {/* 기존 <a href="/"> → <Link href="/"> */}
              <Link href="/" className="hover:text-pastel-accent transition">
                Home
              </Link>
              <Link href="/portfolio" className="hover:text-pastel-accent transition">
                Portfolio
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-6">
          {children}
        </main>

        <footer className="bg-dark-card border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-400 flex justify-center">
            © 2025 MyPortfolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
