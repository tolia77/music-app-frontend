import {api} from "./config"
export async function getUserRequest(id, jwt) {
    let res = await api.get(`/users/${id}`, {
        headers: {
            Authorization: jwt
        }
    });
    return await res.json();
}

export async function updateUserRequest(jwt, data={}) {
    let res = await api.patch("/signup", {
        headers: {
            Authorization: jwt
        },
        body: {
            user: {
                ...data
            }
        }
    });
    return await res.json();
}