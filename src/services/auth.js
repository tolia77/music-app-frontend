import {api} from "./config"
export async function loginRequest(email, password) {
    let res = await api.post("/login", {
        body: {
            user: {
                email: email,
                password: password
            }
        }
    });
    return res.headers.get('authorization')
}

export async function signupRequest(name, email, password) {
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
