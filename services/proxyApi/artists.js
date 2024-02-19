"use client";
import Requests from "@/utils/requests";
import {getJWT} from "@/utils/userSession";

let proxyApi = new Requests("");
export function createArtist(name, image) {
    let formData = new FormData();
    formData.append('artist[name]', name);
    formData.append('artist[avatar]', image);
    let result = fetch("/artists/create/api", {
        method: 'POST',
        body: formData,
        headers: {
            Authorization: getJWT().then(jwt => {return jwt})
        }
    }).then(res => {
        if(!res.ok) {
            throw Error(res.statusText)
        }

        return res.json();
    });
    return result;
}