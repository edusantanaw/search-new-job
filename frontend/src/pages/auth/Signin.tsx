import React, { useRef, useState } from 'react'
import { useAuth } from '../../context/authContext'
import { Container, Form, Input, Label, Paraghaph, Title } from './styles/styles'


const Signin = ({ handleChange }: { handleChange: () => void }) => {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const [error, setError] = useState<string | null>(null)

    const { signin } = useAuth()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (emailRef.current && passwordRef.current) {
            const email = emailRef.current.value
            const password = passwordRef.current.value
            const response = await signin(email, password)

            if (typeof response === 'string') {
                setError(response)
            }
            setError(null)
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Title>Login</Title>
            <div>
                <Label htmlFor="email" >Email</Label>
                <Input placeholder='example@email.com' ref={emailRef} id="email" />
            </div>
            <div>
                <Label htmlFor='password'>Senha</Label>
                <Input id="password" ref={passwordRef} placeholder='********' />
            </div>
            <Input type="submit" />
            <Paraghaph>Ainda não tem uma conta? <span onClick={() => handleChange()}>Criar uma conta.</span></Paraghaph>
        </Form>
    )
}


export default Signin