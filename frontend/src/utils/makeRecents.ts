import { recentsKey } from "./keys"

export function makeRecents() {
    const recents: string[] = JSON.parse(localStorage.getItem(recentsKey) || "[]")
    return recents
}
