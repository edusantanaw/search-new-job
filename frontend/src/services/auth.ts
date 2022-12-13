import { Api } from "../utils/api";
import { AxiosResponse } from 'axios'

export type userSignup = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string
}

const makeStorage = (user: any, token: string) => {
    localStorage.setItem("@App:user", JSON.stringify(user))
    localStorage.setItem("@App:token", token)
}

export async function signin(email: string, password: string): Promise<userSignup | AxiosResponse> {
    const response = await Api.post("/signin", { email, password })
    if (response.status === 200) {
        const { user, accessToken } = response.data
        makeStorage(user, accessToken)
        return response.data
    }
    return response
}


export async function signup(data: userSignup): Promise<userSignup | AxiosResponse> {
    const response = await Api.post("signup", data)
    if (response.status === 200) {
        const { user, accessToken } = response.data
        makeStorage(user, accessToken)
        return response.data
    }
    return response
}