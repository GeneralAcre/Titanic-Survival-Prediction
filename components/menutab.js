import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="MenuBar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}