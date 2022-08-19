import { Link } from "react-router-dom"


export default function PlayerCard({id, username}) {
    return(
        <div>
            <Link to={id}>{username}</Link>
        </div>
    )
}