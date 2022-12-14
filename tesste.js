
const myString = 'ta'
const word = "testando"

const camelLettle = (s, p) => {
    let response = ''
    for (let i in p) {
        if (s.includes(p[i])) response += p[i].toUpperCase()
        else response += p[i]
    }
    return response
}

console.log(camelLettle(myString, word))