import { Api } from "../utils/api"
import { headers } from "../utils/headers";
import { recentsKey } from "../utils/keys";
import { makeRecents } from "../utils/makeRecents";

export type jobs = {
    vacancyFor: string;
    id: string;
    name: string;
    city: string;
    salary: number;
    description: string;
}


function updateRecentsSearchs(search: string) {
    const recents = makeRecents()
    const updatedRecents: string[] = [search, ...recents]
    localStorage.setItem(recentsKey, JSON.stringify(updatedRecents))
}

async function search(data: string[]) {
    updateRecentsSearchs(data[0])
    const options = { params: { city: data[1] }, headers }
    const response = await Api.get(`/jobs/search/${data[0]}`, options)
    return response.data.jobs
}


async function loadRecentJobs(take: number, skip: number) {
    const options = { params: { take, skip }, headers }
    const response = await Api.get("jobs", options)
    return response.data.vancacy
}

async function applyForJob(userId: string, vacancyId: string) {
    const data = { userId, vacancyId }
    const options = { headers }
    const response = await Api.post('apply', data, options)
    return response.data
}

export {
    applyForJob,
    loadRecentJobs,
    search
}