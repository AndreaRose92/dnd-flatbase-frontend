import { Link, useParams } from "react-router-dom"

import Card, { InnerCardGrid, TopSection } from './styles/Cards.style'


export default function CharCard({ character }) {

    const params=useParams()

    return (
        <Card>
            <InnerCardGrid>
                <TopSection as={Link} key={character.id} to={`/${params.username}/${character.id}`}>
                    <img alt='Character avatar'/><br/>
                    <h2>{character.name}</h2>
                </TopSection>            
                <div className="bottom">
                    <button></button>
                    <button></button>
                </div>
            </InnerCardGrid>
        </Card>
    )
}