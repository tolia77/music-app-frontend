import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/auth";

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const auth = useAuth();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await auth.signUp(name, email, password);
            navigate("/");
        } catch (error) {
            setStatus(error.message)
        }
    }
    return(
        <div>
            <h1>Sign up</h1>
            <h1 className="text-red-600 font-bold">{status}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input-name">Name</label>
                <input id="input-name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                       required></input>
                <br/>
                <label htmlFor="input-email">Email</label>
                <input id="input-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                       required></input>
                <br/>
                <label htmlFor="input-password">Password</label>
                <input id="input-password" type="password" value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required></input>
                <br/>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}