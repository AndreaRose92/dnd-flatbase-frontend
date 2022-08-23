import { Link, useParams} from "react-router-dom"
import CharCard from "./CharCard"
// import CharacterSheet from './CharacterSheet'

export default function CharacterPage({characters, setCharacters}) {
    const params = useParams()
    
    const renderCharacters = characters.map(character => {
        return (
            <CharCard key={character.id} character={character} >
                <Link to={`${params.username}/${character.id}`}>
                    {character.name}
                </Link>
            </CharCard> 
        )
    })

    return (
        <div>
            {renderCharacters}
        </div>
    )    
}