import React, { useRef } from 'react'
import { useAuth } from '../../context/authContext'
import { Form } from './styles/sign.styles'

const Signin = () => {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)


    const { signin } = useAuth()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(1)
        if (emailRef.current && passwordRef.current) {
            const email = emailRef.current.value
            const password = passwordRef.current.value
            const response = await signin(email, password)
        }
    }

    return (
        <div>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="email" >Email</label>
                <input placeholder='example@email.com' ref={emailRef} id="email" />
                <label htmlFor='password'>Senha</label>
                <input id="password" ref={passwordRef} placeholder='********' />
                <input type="submit" />
            </Form>
        </div>
    )
}


export default Signin