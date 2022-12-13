import { createContext, ReactNode, useState } from 'react'
import { userSignup } from '../services/auth';

type userAuth = {
    firstName: string;
    lastName: string;
    email: string;
    perfilPhoto?: string;
    phoneNumber?: number;
    city?: string
}

interface AuthContextData {
    user: userAuth;
    signin: (email: string, password: string) => Promise<void>;
    signup: (user: userSignup) => Promise<void>
    signout: () => void;
}

interface providerProp {
    children: ReactNode
}


export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: providerProp) => {

    const [user, setUser] = useState()

    async function signin(email: string, password: string) {

        return
    }

    function signout() {
        localStorage.removeItem('@App:token')
        localStorage.removeItem('@App:user')
    }

    async function signup(user: user) {

    }


    return (
        <AuthContext.Provider value={{ signin, signout, signup, user }}>
            {children}
        </AuthContext.Provider>)
}
