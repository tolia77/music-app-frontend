import "../assets/styles/Sidebar.scss"
import {useAuth} from "../hooks/auth";
import {Link} from "react-router-dom";
export default function Sidebar() {
    const auth = useAuth();
    return(
        <div id="sidebar">
            <h1>Sidebar</h1>
            {
                auth.signedIn() ?
                    <>
                        {auth.token}
                    </> :
                    <>
                        <Link to="/login">Log in</Link>
                    </>
            }
        </div>
    )
}