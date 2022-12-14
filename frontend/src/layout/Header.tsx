import React, { useRef } from 'react'
import { Container, Logo, Input, Button } from './header.styles'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const searchRef = useRef<HTMLInputElement | null>(null)
    const cityRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()

    function handleSearch() {
        if (searchRef.current) {
            const search = searchRef.current.value
            const city = cityRef.current ? cityRef.current.value : null
            navigate(`/search/${search}+${city}`);

        }
    }


    return (
        <Container>
            <Logo>This is my logo</Logo>
            <div className='search'>
                <Input
                    w="12em"
                    placeholder='procurar vagas...'
                    ref={searchRef}
                    id="search"
                />
                <Input
                    w="6em"
                    placeholder='filtrar por cidade'
                    ref={cityRef}
                    id="search"
                />
                <Button onClick={handleSearch}><BiSearchAlt2 /></Button>
            </div>
        </Container>
    )
}

export default Header