'use client';

import './globals.css';
import { Rethink_Sans } from 'next/font/google';
import Menubar from './components/Menubar';
import { useEffect, useState } from 'react';

const rethinkSans = Rethink_Sans({
  variable: '--font-RethinkSans',
  subsets: ['latin'],
  weight: ['400', '500', '700']
});


export default function RootLayout({ children }) {
  const [isScreenTooWide, setIsScreenTooWide] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenTooWide(window.innerWidth > 500);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${rethinkSans.variable} antialiased`}>
        {isScreenTooWide ? (
          <div className="w-full h-screen flex items-center justify-center bg-white text-[#2541B2] text-2xl font-bold">
            Please use a smaller screen to view this website
          </div>
        ) : (
          <>
            <Menubar />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
