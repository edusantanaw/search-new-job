import { ReactNode } from "react";
import { userSignup } from "../services/auth.services";


export type userAuth = {
    firstName: string;
    lastName: string;
    email: string;
    perfilPhoto?: string;
    phoneNumber?: number;
    city?: string
    id: string;
}

export interface AuthContextData {
    userAuth: userAuth | null;
    signin: (email: string, password: string) => Promise<string | true>;
    signup: (user: userSignup) => Promise<string | true>
    signout: () => void;
    tokenAuth: string | null;
    isLogged: boolean;
}

export interface providerProp {
    children: ReactNode
}
