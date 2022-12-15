import React from 'react'
import { Link } from 'react-router-dom'
import { Recents } from './recentsearch.style'

const RecentSearch = () => {
    const recents = JSON.parse(localStorage.getItem("@App:recents") || "[]")
    return (
        <Recents>
            <ul>
                {recents ? recents.map((search: string, i: number) => (
                    <Link to={`/search/${search}`}>
                        <li key={i}>
                            {search}
                        </li>
                    </Link>
                )) : <span>Voce ainda não tem fez nenhuma pesquisa!</span>}
            </ul>
        </Recents>
    )
}

export default RecentSearch