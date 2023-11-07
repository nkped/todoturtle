import Link from "next/link"

export default function Navbar() {

    return(
        <nav className="flex justify-between px-8 py-4 bg-slate-300 font-bold hover:shadow-md text-green-600 opacity-90 sticky top-0 rounded-sm">
            <Link className="hover:text-white" href='/'>My Turtles</Link>
            <Link className="hover:text-white" href='/addTodo'>New Turtle</Link>
        </nav>
    )
}