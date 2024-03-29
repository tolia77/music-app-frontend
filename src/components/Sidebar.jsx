import "../assets/styles/Sidebar.scss"
import {useAuth} from "../hooks/auth";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
export default function Sidebar() {
    const auth = useAuth();
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        async function getCurrentUser() {
            if(auth.signedIn()) {
                const u = await auth.currentUser();
                setUser(u)
            }
        }
        getCurrentUser()
    }, [auth]);
    //
    return(
        <div id="sidebar">
            <h1>Sidebar</h1>
            {
                auth.signedIn() ?
                    <>
                        {user.name}
                        <button onClick={() => {
                            auth.logout();
                            navigate("/");
                        }}>Log out</button>
                    </> :
                    <>
                        <Link to="/login">Log in </Link>
                        <Link to="/signup">Sign up</Link>
                    </>
            }
        </div>
    )
}