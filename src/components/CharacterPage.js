import { useEffect, useState } from "react"
import { Link, useParams, Route, useRouteMatch} from "react-router-dom"
// import CharacterSheet from './CharacterSheet';
// import CreateCharacter from './CreateCharacter';
import CharCard from "./CharCard"
// import CharacterSheet from './CharacterSheet'
import { PlayerGrid, PCWrapper } from "./styles/MainGrids.style"
import Card, { InnerCardGrid, TopSection } from "./styles/Cards.style"

import charactersBanner from '../images/characters.png'
import plus from '../images/plus.png'

export default function CharacterPage() {
    const params = useParams()
    const match = useRouteMatch()
    
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/${params.username}`)
            .then(r=>r.json())
            .then(data=>setCharacters(data))
    }, [])
    
    const handleDelete = (i) => {
        setCharacters(characters => characters.filter(c => c.id !== i))
    }

    const renderCharacters = characters.map(character => {
        return (
            <CharCard key={character.id} character={character} handleDelete={handleDelete}/> 
        )
    })

    return (
        <PCWrapper>
            <section>
                <img src={charactersBanner} alt='Characters banner'/>
            </section>
            <PlayerGrid>
                {renderCharacters}
                <Card as={Link} to={`/${params.username}/new-character`}>
                    <InnerCardGrid>
                        <TopSection>
                            <img src={plus} alt='New character plus sign'/><br/>
                            <h2>New Character</h2>
                        </TopSection>
                        <div>
                        </div>
                    </InnerCardGrid>
                </Card>
            </PlayerGrid>
        </PCWrapper>
    )    
}