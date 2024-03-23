import {createContext, useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {loginRequest} from "../services/auth";

export const AuthContext = createContext();
export default function AuthProvider({children}) {
    //TODO: logout, get current user, sign up
    const [token, setToken] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
    useEffect(() => {
        setToken(cookies.jwt)
    }, []);
    async function login(email, password){
        let res = await loginRequest(email, password);
        let jwt = res.jwt;
        setToken(jwt);
        setCookie("jwt", jwt, {sameSite: true});
    }
    function signedIn() {
        return !!token;
    }
    return <AuthContext.Provider value={{token, login, signedIn}}>{children}</AuthContext.Provider>
}