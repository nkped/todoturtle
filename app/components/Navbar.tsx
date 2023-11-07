import Link from "next/link"

export default function Navbar() {

    return(
        <nav className="flex justify-between px-8 py-3 bg-emerald-100 font-bold text-green-600 opacity-90 sticky top-0">
            <Link href='/'>Turtle Todos</Link>
            <Link href='addtodo'>New Turtle</Link>
        </nav>
    )
}