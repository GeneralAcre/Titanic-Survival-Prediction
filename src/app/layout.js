import './globals.css';
import { Barlow } from 'next/font/google';
import Sidebar from './components/Sidebar';

// ✅ Load fonts at module scope
const barlow = Barlow({
  variable: '--font-Barlow',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
});

export const metadata = {
  title: 'Dashboard',
  description: 'My Next.js App with Sidebar',
};

// ✅ Root Layout must return <html> and <body>
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} antialiased`}>
        <Sidebar />
        {children}
        <div className="warning">
          Please use a smaller screen to view this website
        </div>
      </body>
    </html>
  );
}
