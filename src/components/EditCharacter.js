import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react"

export default function EditCharacter() {
    const params = useParams()
    const history = useHistory()
    let username = params.username
    let id = params.id

    // console.log(character, race, klass)
    
    
    const [updatedCharacter, setUpdatedCharacter] = useState({
        name: '',
        level: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        player: username
    })
    
    useEffect(() => {
    fetch(`http://localhost:9292/${username}/${id}`)
            .then(r=>r.json())
            .then(data=> {setUpdatedCharacter(data[0])})
    },[])

    console.log(updatedCharacter)
    
    const handleInput = (e) => {
        let formName = e.target.name
        let formValue = e.target.value
        setUpdatedCharacter({
            ...updatedCharacter,
            [formName]: formValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/${username}/${id}/edit`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({updatedCharacter})
        })
        .then(r=>r.json())
        .then(()=>history.push(`/${username}/${id}`))
        // setUpdatedCharacter({
        //     name: '',
        //     level: 0,
        //     str: 0,
        //     dex: 0,
        //     con: 0,
        //     int: 0,
        //     wis: 0,
        //     cha: 0,
        //     player: '',
        //     klass: '',
        //     race: ''
        // })
    }
    


    return (
        <div>
            <form className='updatedCharacter' onSubmit={(e)=>handleSubmit(e)}>
                <h1>Character Editor</h1>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" value={updatedCharacter.name} name="name" onChange={handleInput}/><br/>
                    <label htmlFor='level'>Level:</label>
                    <input type="number" value={updatedCharacter.level} name="level" onChange={handleInput}/><br/>
                    <label htmlFor='str'>Strength:</label>
                    <input type="number" value={updatedCharacter.str} name="str" onChange={handleInput}/><br/>
                    <label htmlFor='dex'>Dexterity:</label>
                    <input type="number" value={updatedCharacter.dex} name="dex" onChange={handleInput}/><br/>
                    <label htmlFor='con'>Constitution:</label>
                    <input type="number" value={updatedCharacter.con} name="con" onChange={handleInput}/><br/>
                    <label htmlFor='int'>Intelligence:</label>
                    <input type="number" value={updatedCharacter.int} name="int" onChange={handleInput}/><br/>
                    <label htmlFor='wis'>Wisdom:</label>
                    <input type="number" value={updatedCharacter.wis} name="wis" onChange={handleInput}/><br/>
                    <label htmlFor='cha'>Charisma:</label>
                    <input type="number" value={updatedCharacter.cha} name="cha" onChange={handleInput}/><br/>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )

}