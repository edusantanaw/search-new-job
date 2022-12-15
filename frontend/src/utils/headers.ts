import { makeToken } from './makeToken'

const token = makeToken()
export const headers = {
    Authorization: `Bearer ${token}`,
}