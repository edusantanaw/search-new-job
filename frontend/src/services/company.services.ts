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

export default async function getCompany() {
    const response = await Api.get('/company', {
        headers: headers
    })

    return response.data.companys
}