import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function CharacterPage() {
    const params = useParams()
    // const player = 
    const [characters, setCharacters] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9292/')
    })



    return (
        <div>
            <h2>"asdf"</h2>
        </div>
    )    
}