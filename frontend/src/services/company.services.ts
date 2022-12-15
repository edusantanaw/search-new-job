import { Api } from "../utils/api";
import { headers } from "../utils/headers";


export type company = {
    id: string;
    city: string;
    name: string;
    perfilLogo: string;
    phone: number;
    ownerId: string;
    email: string;
    description: string;
}

export async function registerCompany(data: FormData) {
    const options = { headers }
    const response = await Api.post('/company', data, options)
    return response.data
}

export default async function getCompany() {
    const options = { headers }
    const response = await Api.get('/company', options)

    return response.data.companys
}