import { createContext, useState, useContext, useEffect } from 'react'
import { AuthContextData, providerProp, userAuth } from '../protocols/Global';
import { userSignup } from '../services/auth';
import { signinService, signupService } from '../services/auth'


export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: providerProp) => {

    const [userAuth, setUserAuth] = useState<userAuth | null>(null)
    const [tokenAuth, setToken] = useState<string | null>(null)
    const [isLogged, setIsLogged] = useState<boolean>(false)

    useEffect(() => {
        const userStorage = localStorage.getItem("@App:user")
        const tokenStorage = localStorage.getItem('@App:token')

        if (userStorage && tokenStorage) {
            setUserAuth(JSON.parse(userStorage))
            setToken(tokenStorage)
        }
    }, [isLogged])

    const resetStates = () => {
        setUserAuth(null)
        setToken(null)
        setIsLogged(false)
    }

    async function signin(email: string, password: string) {

        const response = await signinService(email, password)
        if (typeof response == 'string') {

        }
        const { token, user } = response
        setUserAuth(user)
    }

    function signout() {
        localStorage.removeItem('@App:token')
        localStorage.removeItem('@App:user')
        resetStates()
    }

    async function signup(user: userSignup) {

    }


    return (
        <AuthContext.Provider value={{ signin, tokenAuth, signout, signup, userAuth }}>
            {children}
        </AuthContext.Provider>)
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}
