import Link from "next/link"

export default function MenuBar(){
    return(
        <nav>
            <h1>My Website</h1>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/model">Model</Link>

        </nav>
    )
}