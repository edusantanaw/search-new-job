import { Api } from "../utils/api";
import { AxiosResponse } from 'axios'

export type userSignup = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string
}

interface response {
    user: userSignup
    accessToken: string
}

const makeStorage = (user: any, token: string) => {
    localStorage.setItem("@App:user", JSON.stringify(user))
    localStorage.setItem("@App:token", token)
}

export async function signinService(email: string, password: string): Promise<string | response> {

    const response = await Api.post("/signin", { email, password })
        .then((response: { data: response }) => {
            const { user, accessToken } = response.data
            makeStorage(user, accessToken)
            return { user, accessToken }
        })
        .catch((error: { response: { data: string } }) => {
            return error.response.data
        })
    return response

}


export async function signupService(data: userSignup): Promise<string | response> {
    const response = await Api.post("/signin", data)
        .then((response: { data: response }) => {
            const { user, accessToken } = response.data
            makeStorage(user, accessToken)
            return { user, accessToken }
        })
        .catch((error: { response: { data: string } }) => {
            return error.response.data
        })
    return response
}