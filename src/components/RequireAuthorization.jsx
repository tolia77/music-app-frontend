import {useAuth} from "../hooks/auth";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
export default function RequireAuthorization({children}) {
    const auth = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if(!auth.signedIn()) {
            navigate("/login")
        }
    }, []);

    return auth.signedIn() && children
}