import { useEffect, useState } from "react"
import { Link, useParams, Route, useRouteMatch} from "react-router-dom"
// import CharacterSheet from './CharacterSheet';
// import CreateCharacter from './CreateCharacter';
import CharCard from "./CharCard"
// import CharacterSheet from './CharacterSheet'

export default function CharacterPage() {
    const params = useParams()
    const match = useRouteMatch()
    
  const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/${params.username}`)
            .then(r=>r.json())
            .then(data=>setCharacters(data))
    }, [])
    
    const renderCharacters = characters.map(character => {
        return (
            <CharCard key={character.id} character={character} /> 
        )
    })

    return (
        <div>
            {renderCharacters}
            <Link to={`/${params.username}/new-character`}>New Character</Link>
        </div>
    )    
}