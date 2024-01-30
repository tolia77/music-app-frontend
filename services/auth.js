"use client"
import axios from "axios";

//TODO: expiration date
const baseUrl = "http://127.0.0.1:3000"
export async function login(email, password, remember=false) {
    let instance = axios.create({
        baseURL: baseUrl,
        timeout: 30000,
        timeoutErrorMessage: "Time out"
    })
    let res =  await instance.post("/login", {
        user: {
            email: email,
            password: password
        }
    })
    return res.headers.getAuthorization()

}

export async function signup(name, email, password) {
    //TODO
}