"use server";
import Requests from "@/utils/requests";
const api = new Requests("http://127.0.0.1:3000");
export async function login(email, password) {
    let res = await api.post("/login", {
        body: {
            user: {
                email: email,
                password: password
            }
        }
    });
    return res.headers.get('authorization');
}

export async function signup(name, email, password) {
    let res = await api.post("/signup", {
        body: {
            user: {
                name: name,
                email: email,
                password: password
            }
        }
    });
    return res.headers.get('authorization')
}
