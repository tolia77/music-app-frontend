"use client";
import {useState} from "react";
import {signup} from "@/services/auth";
import {saveCookies} from "@/utils/userSession";
import {useRouter} from "next/navigation";
export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const router = useRouter();
    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        signup(name, email, password).then(jwt => {
            saveCookies(jwt).then(() => {
                router.push("/");
            });
        }).catch(e => {
            const error = e.message;
            console.log(e);
            const responseCode = error.split(' ')[0];
            if(responseCode === "422") {
                setStatus('Invalid data')
            }
        })
    }
    return(
        <>
            <h1>Sign up</h1>
            <h1>{status}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={handleChangeName} required maxLength="32"/>
                <br/>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={handleChangeEmail} required/>
                <br/>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={password} onChange={handleChangePassword} required/>
                <br/>
                <button type="submit">Sign up</button>
            </form>
        </>
    )
}