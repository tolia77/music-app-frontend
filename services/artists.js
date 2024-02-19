"use server";
import {getJWT} from "@/utils/userSession";
import Requests from "@/utils/requests";

let api = new Requests("http://localhost:3000");

export async function getArtist(id) {
    let res = await api.get(`/artists/${id}}`, {
        headers: {
            Authorization: await getJWT()
        },
        next: {
            revalidate: 3600
        }
    });
    return await res.json();
}