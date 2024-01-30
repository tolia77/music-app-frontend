'use client'
import {useState} from "react";
import {login} from "@/services/auth";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        let user = login(email, password)
        user.then(u => {
            console.log(u)
        })
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }
    function handleChangePassword(e) {
        setPassword(e.target.value)
    }
    return (
        <>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input-email">Email</label>
                <input id="input-email" type="email" value={email} onChange={handleChangeEmail}></input>
                <br/>
                <label htmlFor="input-password">Password</label>
                <input id="input-password" type="password" value={password} onChange={handleChangePassword}></input>
                <br/>
                <button type="submit">Log in</button>
            </form>
        </>
    )
}