import './CSS/globals.css';
import { Rethink_Sans } from 'next/font/google';
import Menubar from './components/Menubar';

const rethinkSans = Rethink_Sans({
  variable: '--font-RethinkSans',
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const metadata = {
  title: 'Dashboard',
  description: 'My Next.js App with Sidebar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.variable} antialiased`}>
        <Menubar />
        {children}
        <div className="warning">
          Please use a smaller screen to view this website
        </div>
      </body>
    </html>
  );
}
