import React, { useRef, useState } from 'react'
import { useAuth } from '../../context/authContext'
import { registerCompany } from '../../services/company.services'
import { Input } from '../../styles/Global'
import { Container, Form } from './register.style'
// name, description, email, phone, ownerId, city 
const RegisterCompany = () => {
    const { userAuth } = useAuth()
    const nameRef = useRef<HTMLInputElement | null>(null)
    const descRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const phoneRef = useRef<HTMLInputElement | null>(null)
    const cityRef = useRef<HTMLInputElement | null>(null)
    const [image, setImage] = useState<File | null>(null)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = new FormData()
        if (nameRef.current) data.append("name", nameRef.current.value)
        if (descRef.current) data.append("description", descRef.current.value)
        if (emailRef.current) data.append("email", emailRef.current.value)
        if (phoneRef.current) data.append("phone", phoneRef.current.value)
        if (cityRef.current) data.append("city", cityRef.current.value)
        if (userAuth) data.append('ownerId', userAuth.id)
        if (image) data.append("image", image)

        const response = await registerCompany(data)
    }

    function handleImage(e: React.FormEvent<HTMLInputElement>) {
        const img = (e.target as HTMLInputElement).files;
        if (img) setImage(img[0]);
    }

    return (
        <Container>
            <h2>Registrar empresa</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Nome da empresa</label>
                    <Input ref={nameRef} h="2.8em" w="100%" type="text" />
                </div>
                <div>
                    <label>Descrição</label>
                    <Input ref={descRef} h="2.8em" w="100%" type="text" />
                </div>
                <div>
                    <label>Telefone</label>
                    <Input ref={phoneRef} h="2.8em" w="100%" type="text" />
                </div>
                <div>
                    <label>Cidade</label>
                    <Input ref={cityRef} h="2.8em" w="100%" type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <Input ref={emailRef} h="2.8em" w="100%" type="text" />
                </div>
                <div>
                    <label htmlFor="image">Imagem</label>
                    <input type="file" id="image" name="image" onChange={(e) => handleImage(e)} />
                </div>
                <input type="submit" />
            </Form>
        </Container>
    )
}

export default RegisterCompany