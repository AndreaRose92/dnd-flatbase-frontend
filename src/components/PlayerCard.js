// import { Link } from "react-router-dom"
import Card from './styles/Cards.style'


export default function PlayerCard({username}) {
    return(
        <Card>
            <img alt='User avatar'/>
            <h2>{username}</h2>
        </Card>
    )
}