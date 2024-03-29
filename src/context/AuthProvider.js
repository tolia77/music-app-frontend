import {createContext, useState} from "react";
import {useCookies} from "react-cookie";
import {loginRequest, logoutRequest, signupRequest} from "../services/auth";
import {jwtDecode} from "jwt-decode";
import {getUserRequest} from "../services/users";

export const AuthContext = createContext();
export default function AuthProvider({children}) {
    const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
    const [token, setToken] = useState(cookies.jwt || "");
    async function login(email, password){
        let jwt = await loginRequest(email, password);
        setToken(jwt);
        const date = new Date(jwtDecode(jwt).exp * 1000);
        setCookie("jwt", jwt, {path: "/", sameSite: "strict", expires: date});
    }
    async function signUp(name, email, password) {
        let jwt = await signupRequest(name, email, password);
        setToken(jwt);
        const date = new Date(jwtDecode(jwt).exp * 1000);
        setCookie("jwt", jwt, { expires: date});
    }
    async function currentUser() {
        return await getUserRequest(jwtDecode(token).sub, token);
    }
    function signedIn() {
        return !!token;
    }
    function logout() {
        logoutRequest(token).then(() => {
            removeCookie("jwt", {path: "/", sameSite: "strict"});
            setToken("");
        });
    }
    return <AuthContext.Provider value={{token, login, signedIn, currentUser, logout, signUp}}>{children}</AuthContext.Provider>
}