'use client';
import {deleteCookies} from "@/utils/userSession";
import {useRouter} from "next/navigation";

export default function Logout() {
    const router = useRouter();
    deleteCookies().then(() => {
        router.push('/')
    })

}