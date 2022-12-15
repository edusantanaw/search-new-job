import React, { useRef } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { Input } from '../styles/Global'
import { Button } from './serchbar.styles'

const SearchBar = () => {

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
        <div className='search'>
            <Input
                w="30em"
                placeholder='procurar vagas...'
                ref={searchRef}
                id="search"
            />
            <Input
                w="15em"
                placeholder='filtrar por cidade'
                ref={cityRef}
                id="search"
            />
            <Button onClick={handleSearch}><span>Achar vagas</span><BiSearchAlt2 /></Button>
        </div>
    )
}



export default SearchBar