import Link from 'next/link'

export default function Header() {
    return (
        <nav className="bg-gray-500">
            <h1>Music App</h1>
            <Link href="/login/">Log in</Link>
            <Link href="/signup/">Sign up</Link>
        </nav>
    )
}