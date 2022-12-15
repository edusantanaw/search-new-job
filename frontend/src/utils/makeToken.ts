import { tokenKey } from "./keys"

export function makeToken() {
    const token = localStorage.getItem(tokenKey)
    return token
}