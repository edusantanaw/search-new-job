import React, { useState } from 'react'
import { Container, Logo } from './header.styles'
import { useAuth } from '../context/authContext'
import defaultImg from '../assets/perfilDefult.jpeg'
import { Link } from 'react-router-dom'

const Header = () => {
    const { signout } = useAuth()
    const { userAuth } = useAuth()
    const [dropDown, setDropDown] = useState(false)

    function handleDropDown() {
        dropDown ? setDropDown(false) : setDropDown(true)
    }


    return (
        <Container>
            <Logo>This is my logo</Logo>
            <ul>
                <li><Link to="/" >Anunciar vaga</Link></li>
                <li><Link to='/company'>Empresas</Link></li>
                <li><Link to="/">Achar vagas</Link ></li>
                <li id="dropDown">
                    <img onClick={handleDropDown}
                        src={userAuth?.perfilPhoto ?
                            `http://localhost:5000/${userAuth.perfilPhoto}`
                            : defaultImg}
                        alt="user perfil" />
                    {dropDown &&
                        <ul>
                            <li>Configurações</li>
                            <li><Link to="/company/register">Empresa</Link></li>
                            <li onClick={signout}>Sair</li>
                        </ul>

                    }
                </li>
            </ul>
        </Container>
    )
}

export default Header