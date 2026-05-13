'use client';

import './globals.css';
import { Rethink_Sans } from 'next/font/google';
import Menubar from './components/Menubar';
import Footer from './components/Footer';

const rethinkSans = Rethink_Sans({
  variable: '--font-RethinkSans',
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.variable} antialiased`}>
        <Menubar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
