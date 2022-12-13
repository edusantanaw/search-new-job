import { Api } from "../utils/api";

export type user = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string
}

export async function signin(email: string, password: string) {
    const response = await Api.post("/signin", { email, password })
    if (response.status === 200) return response.data
    return response
}


export async function signup(data: user) {
    const response = await Api.post("signup", data)
    if (response.status === 200) return response.data
    return response
}