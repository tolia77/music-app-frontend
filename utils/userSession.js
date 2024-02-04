"use server";
import {cookies} from "next/headers";
import {jwtDecode} from "jwt-decode";

export async function saveCookies(jwt) {
    cookies().set({
        name: "auth",
        value: jwt,
        httpOnly: true,
        expires: jwtDecode(jwt).exp * 1000
    });
}

export async function deleteCookies() {
    cookies().delete('auth')
}

export async function getJWT() {
    return cookies().get('auth')?.value
}

export async function signedIn() {
    return !!cookies().get('auth')?.value
}

export async function getUserId() {
    const jwt = cookies().get("auth").value;
    return jwtDecode(jwt).sub;
}