// import { Link } from "react-router-dom"
import Card, { InnerCardGrid, TopSection } from './styles/Cards.style'


export default function PlayerCard({username}) {
    return(
        <Card>
            <InnerCardGrid>
                <TopSection>
                    <img alt='User avatar'/><br/>
                    <h2>{username}</h2>
                </TopSection>
                <div></div>
            </InnerCardGrid>
        </Card>
    )
}