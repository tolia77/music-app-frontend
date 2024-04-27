import "../assets/styles/Sidebar.scss"
import {useAuth, useCurrentUser} from "../hooks/auth";
import {Link, useNavigate} from "react-router-dom";
export default function Sidebar() {
    const auth = useAuth();
    const user = useCurrentUser();
    const navigate = useNavigate();

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