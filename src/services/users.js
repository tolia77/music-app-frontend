import {api} from "./config"
export async function getUserRequest(id, jwt) {
    let res = await api.get(`/users/${id}`, {
        headers: {
            Authorization: jwt
        }
    });
    return await res.json();
}