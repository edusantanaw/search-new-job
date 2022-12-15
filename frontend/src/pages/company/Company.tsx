import React, { useEffect, useRef, useState } from 'react'
import getCompany, { company } from '../../services/company.services'
import { Input } from '../../styles/Global'
import { Container, Items, Lists } from './company.style'

const Company = () => {

    const [companyRespo, setCompany] = useState<company[] | null>(null)
    const [filteredList, setFilterdList] = useState<company[] | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        (async () => {
            const response = await getCompany()
            console.log(response)
            setCompany(response)
        })()
    }, [filteredList])

    function filterList() {
        if (inputRef.current && companyRespo) {
            const target = inputRef.current.value
            const newList = companyRespo.filter((company) => company.city.includes(target))
            console.log(newList)
            setFilterdList(newList)
        }
    }


    return (
        <Container>
            <h2>Encontre a sua futura empresa</h2>
            <span>nome</span>
            <div className='search'>
                <Input w="60em" ref={inputRef} h="4em" placeholder='Nome da empresa' type="text" name="company" id="name" />
                <button onClick={filterList}>Filtrar</button>
            </div>
            <h3>Todas as empresas</h3>
            <Lists>
                {filteredList && filteredList.length > 0 ? filteredList.map((company, i) => (
                    <Items key={i} >
                        <img src={`http://localhost:5001/${company.perfilLogo}`} alt="company logo" />
                        <div className='company'>
                            <h3>{company.name}</h3>
                            <div>
                                <span>{company.city}</span>
                                <span>Vagas</span>
                            </div>
                        </div>
                    </Items>
                )) : companyRespo && companyRespo.map((company, i) => (
                    <Items key={i} >
                        <img src={`http://localhost:5001/${company.perfilLogo}`} alt="company logo" />
                        <div className='company'>
                            <h3>{company.name}</h3>
                            <div>
                                <span>{company.city}</span>
                                <span>Vagas</span>
                            </div>
                        </div>
                    </Items>
                ))}
            </Lists>
        </Container>
    )
}

export default Company