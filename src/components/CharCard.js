import { Link, useParams } from "react-router-dom"

import Card, { InnerCardGrid, TopSection } from './styles/Cards.style'


export default function CharCard({ character, handleDelete }) {

    const params=useParams()

    const deleteCharacter = () => {
        fetch(`http://localhost:9292/${params.username}/${character.id}`, {method: "DELETE"})
        .then(()=>handleDelete(character.id))
    }

    return (
        <Card>
            <InnerCardGrid>
                <TopSection as={Link} key={character.id} to={`/${params.username}/${character.id}`}>
                    <img alt='Character avatar'/><br/>
                    <h2>{character.name}</h2>
                </TopSection>            
                <div className="bottom">
                    <button></button>
                    <button onClick={deleteCharacter}></button>
                </div>
            </InnerCardGrid>
        </Card>
    )
}