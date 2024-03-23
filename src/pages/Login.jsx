import {useState} from "react";
import {useAuth} from "../hooks/auth";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const auth = useAuth();
    function handleSubmit(e) {
        //TODO: error
        e.preventDefault();
        try {
            auth.login(email, password).then(() => {
                navigate("/")
            })
        } catch (error) {
            setStatus(error.message)
        }
    }
    return(
        <>
            <h1>Log in</h1>
            <h1 className="text-red-600 font-bold">{status}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input-email">Email</label>
                <input id="input-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <br/>
                <label htmlFor="input-password">Password</label>
                <input id="input-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       required></input>
                <br/>
                <button type="submit">Log in</button>
            </form>
        </>
    )
}