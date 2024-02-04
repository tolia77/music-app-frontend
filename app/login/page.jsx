'use client';
import {useState} from "react";
import {login} from "@/services/auth";
import {saveCookies} from "@/utils/userSession";
import {useRouter} from "next/navigation";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        login(email, password).then(jwt => {
            saveCookies(jwt).then(() => {
                router.push("/");
            })
        })
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }
    return (
        <>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input-email">Email</label>
                <input id="input-email" type="email" value={email} onChange={handleChangeEmail} required></input>
                <br/>
                <label htmlFor="input-password">Password</label>
                <input id="input-password" type="password" value={password} onChange={handleChangePassword} required></input>
                <br/>
                <button type="submit">Log in</button>
            </form>
        </>
    )
}