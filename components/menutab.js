import Link from 'next/link';

export default function MenuTab() {
  return (
    <nav className="Navbar">
      <Link href="/" >Home</Link>
      <Link href="/about" >About</Link>
      <Link href="/contact" >Contact</Link>
      <Link href="/model" >Model</Link>
    </nav>
  );
}