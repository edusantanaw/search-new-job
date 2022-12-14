import { Api } from "../utils/api"

function makeToken() {
    const token = localStorage.getItem('@App:token')
    return token
}

export type jobs = {
    vacancyFor: string;
    id: string;
    companyName: string;
}

export async function search(url: string, data: string) {
    const token = makeToken()
    const response = await Api.get(url, {
        params: { city: data },
        headers: {
            Authorization: `Bearer ${token}`,

        }
    })
    console.log(response)
    return response.data
}
