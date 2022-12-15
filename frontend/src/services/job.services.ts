import { Api } from "../utils/api"
import { recentsKey, tokenKey } from "../utils/keys";


function makeToken() {
    const token = localStorage.getItem(tokenKey)
    return token
}

export type jobs = {
    vacancyFor: string;
    id: string;
    name: string;
    city: string;
    salary: number;
    description: string;
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
    return response.data.jobs
}

function updateRecentsSearchs(search: string) {
    const recents = JSON.parse(localStorage.getItem(recentsKey) || "[]")
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
    console.log(response.data)
    return response.data.vancacy
}