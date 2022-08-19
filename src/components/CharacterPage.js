import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CharacterSheet from './CharacterSheet'

export default function CharacterPage({players}) {
    const params = useParams()
    // const player = players[params.playerID]
    // console.log(params.id)
    const [characters, setCharacters] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:9292/${parseInt(params.id)}`)
            .then(r=>r.json())
            .then(data=>setCharacters(data))
    }, [params])

    // console.log(characters)

    const renderCharacters = characters.map(character => {
        return (<Link key={character.id} to={`/${parseInt(params.id)}`}>
            <CharacterSheet name={character.name} />
        </Link>)
    })

    return (
        <div>
            {renderCharacters}
        </div>
    )    
}