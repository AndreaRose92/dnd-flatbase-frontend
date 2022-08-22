import { useEffect, useState } from "react"
import { Link, useParams, useRouteMatch } from "react-router-dom"
import CharacterSheet from './CharacterSheet'

export default function CharacterPage({players}) {
    const params = useParams()
    const match = useRouteMatch()
    // console.log(params)
    // const player = players[params.playerID]
    // console.log(params.id)
    const [characters, setCharacters] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:9292/${params.username}`)
            .then(r=>r.json())
            .then(data=>setCharacters(data))
    }, [params])

    // console.log(characters)

    const renderCharacters = characters.map(character => {
        return (<Link key={character.id} to={`/${params.username}/${character.id}`}>
            <CharacterSheet name={character.name} />
        </Link>)
    })

    return (
        <div>
            {renderCharacters}
        </div>
    )    
}