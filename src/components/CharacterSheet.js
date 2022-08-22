import { useParams } from "react-router-dom"

export default function CharacterSheet({characters}) {
    console.log(characters)
    const params = useParams()
    console.log(params.id)
    const character = characters.find(character => character.id === parseInt(params.id))
    console.log(character)

    return (
        <div>
            <h2>{character.name}</h2>
        </div>
    )
}