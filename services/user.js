"use server";
import {getJWT} from "@/utils/userSession";
import Requests from "@/utils/requests";

let api = new Requests("http://localhost:3000")
export async function getUser(id) {
    let res = await api.get(`/users/${id}}`, {
        headers: {
            Authorization: await getJWT()
        },
        next: {
            revalidate: 300
        }
    });
    return await res.json();
};