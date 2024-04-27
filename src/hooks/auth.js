import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import {getUserRequest} from "../services/users";
import {jwtDecode} from "jwt-decode";

export function useAuth() {
    return useContext(AuthContext)
}

export function useCurrentUser() {
    const auth = useAuth();
    const [user, setUser] = useState({});
    useEffect(() => {
        async function get() {
            setUser(await getUserRequest(jwtDecode(auth.token).sub, auth.token));
        }
        auth.signedIn() && get()
    }, [auth]);
    return user
}