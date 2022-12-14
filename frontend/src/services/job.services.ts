import { Api } from "../utils/api"

function makeToken() {
    const token = localStorage.getItem('@App:token')
    return token
}

export type jobs = {
    vacancyFor: string;
    id: string;
    companyName: string;
    city: string;
    salary: number;
}

export async function search(data: string[]) {
    const token = makeToken()
    updateRecentsSearchs(data[0])
    const response = await Api.get(`/jobs/search/${data[0]}`, {
        params: { city: data[1] },
        headers: {
            Authorization: `Bearer ${token}`,

        }
    })
    return response.data
}

function updateRecentsSearchs(search: string) {
    const recents = JSON.parse(localStorage.getItem("@App:recents") || "[]")
    const verifyAlreadyExists: string[] = recents.filter((recent: string) => recent === search)
    if (verifyAlreadyExists.length > 0) return
    const updatedRecents: string[] = [search, ...recents]
    localStorage.setItem('@App:recents', JSON.stringify(updatedRecents))
}


export async function loadRecentJobs() {
    const token = makeToken()
    const response: { data: { vancacy: jobs[] } } = await Api.get("jobs", {
        headers: {
            Authorization: `Bearer ${token}`,

        }
    })
    console.log(response.data.vancacy)
    return response.data.vancacy
}