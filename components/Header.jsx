import Link from 'next/link'
import {getUser} from "@/services/users";
import {getUserId, signedIn} from "@/utils/userSession";
export default async  function Header() {
    const signed = await signedIn();
    let user;
    if(signed) {
        user = await getUser(await getUserId());
    }
    return (
        <nav className="bg-gray-500">
            <Link href="/">Music App </Link>
            {signed ?
                <>
                    <h1>{user.name}</h1>
                    <Link href="/logout">Log out</Link>
                </>
            :
                <>
                    <Link href="/login/">Log in</Link>
                    <Link href="/signup/">Sign up</Link>
                </>
            }
        </nav>
    )
}

