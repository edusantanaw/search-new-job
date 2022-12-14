import React from 'react'
import { Container, Logo } from './header.styles'
import { useAuth } from '../context/authContext'
import defaultImg from '../assets/perfilDefult.jpeg'

const Header = () => {

    const { userAuth } = useAuth()

    return (
        <Container>
            <Logo>This is my logo</Logo>

            <ul>
                <li>Anunciar vaga</li>
                <li>Empresas</li>
                <li>Achar vagas</li>
                <li>
                    <img
                        src={userAuth?.perfilPhoto ?
                            `http://localhost:5000/${userAuth.perfilPhoto}`
                            : defaultImg}
                        alt="user perfil" />
                </li>
            </ul>
        </Container>
    )
}

export default Header