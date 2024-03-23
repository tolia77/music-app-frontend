import {api} from "./config"
//TODO: return full info about user
export async function loginRequest(email, password) {
    let res = await api.post("/login", {
        body: {
            user: {
                email: email,
                password: password
            }
        }
    });
    return {
        user: (await res.json()).status.data.user,
        jwt: res.headers.get('authorization')
    }
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
