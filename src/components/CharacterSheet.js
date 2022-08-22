import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function CharacterSheet() {
    // console.log(characters)
    const params = useParams()
    // console.log(params.id)

    const [character, setCharacter] = useState({})
    const [race, setRace] = useState({})
    const [klass, setKlass] = useState({})

    useEffect(() => {
        fetch(`http://localhost:9292/${params.username}/${params.id}`)
            .then(r=>r.json())
            .then(data=> {setCharacter(data[0]); setRace(data[1]); setKlass(data[2])})
    })

    // const character = characters.find(character => character.id === parseInt(params.id))
    // console.log(character)

    return (
        <div>
            <h2>{character.name}</h2>
            <h3>{race.name}</h3>
            <h3>{klass.name}</h3>
            <p>{character.str}</p>
            <p>{character.dex}</p>
            <p>{character.con}</p>
            <p>{character.wis}</p>
            <p>{character.int}</p>
            <p>{character.cha}</p>
        </div>
    )
}