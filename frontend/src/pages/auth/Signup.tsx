import React, { useRef, useState } from 'react'
import { useAuth } from '../../context/authContext'
import { Form, Input, Label, Paraghaph, Title } from './styles/styles'

const Signup = ({ handleChange }: { handleChange: () => void }) => {
    const firstNameRef = useRef<HTMLInputElement | null>(null)
    const lastNameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const [error, setError] = useState<string | null>(null)

    const { signup } = useAuth()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (emailRef.current && passwordRef.current && firstNameRef.current && lastNameRef.current && confirmPasswordRef.current) {
            const email = emailRef.current.value
            const password = passwordRef.current.value
            const firstName = firstNameRef.current.value
            const lastName = lastNameRef.current.value
            const confirmPassword = confirmPasswordRef.current.value
            const response = await signup({ email, firstName, lastName, confirmPassword, password })

            if (typeof response === 'string') {
                setError(response)
            }
            setError(null)
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Title>Cria conta</Title>
            <div>
                <Label htmlFor="firstName" >Nome</Label>
                <Input placeholder='Eduardo' ref={firstNameRef} id="firstName" />
                <Label htmlFor="lastName" >Sobrenome</Label>
                <Input placeholder='Santana' ref={lastNameRef} id="lastName" />
                <Label htmlFor="email" >Email</Label>
                <Input placeholder='example@email.com' ref={emailRef} id="email" />
                <Label htmlFor='password'>Senha</Label>
                <Input id="password" ref={passwordRef} placeholder='********' />
                <Label htmlFor='confirmPassword'>Confirmação de senha</Label>
                <Input id="confirmPassword" ref={confirmPasswordRef} placeholder='********' />
            </div>
            <Input type="submit" />
            <Paraghaph>Já tem uma conta? <span onClick={() => handleChange()}>Fazer login.</span></Paraghaph>
        </Form>
    )
}


export default Signup