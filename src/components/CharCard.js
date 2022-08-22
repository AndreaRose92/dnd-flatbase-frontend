import { Link, useParams } from "react-router-dom"




export default function CharCard({ character }) {

    const params=useParams()

    return (
        <Link key={character.id} to={`/${params.username}/${character.id}`}>
            <h2>{character.name}</h2>
        </Link>)

}