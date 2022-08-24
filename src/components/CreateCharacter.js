import { useParams, useHistory } from "react-router-dom";
import { useState } from "react"

export default function CreateCharacter() {
    const params = useParams()
    const history = useHistory()

    let username = params.username

    const [newCharacter, setNewCharacter] = useState({
        name: '',
        level: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        player: username,
        klass: '',
        race: ''
    })

    const handleInput = (e) => {
        let formName = e.target.name
        let formValue = e.target.value
        setNewCharacter({
            ...newCharacter,
            [formName]: formValue
        })
        console.log(`${formName}: ${formValue}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/${username}/new-character`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({newCharacter})
        })
        .then(r=>r.json())
        .then(()=>history.push(`/${username}`))
        setNewCharacter({
            name: '',
            level: 0,
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0,
            player: '',
            klass: '',
            race: ''
        })
    }
    


    return (
        <div>
            <form className='newCharacter' onSubmit={(e)=>handleSubmit(e)}>
                <h1>Character Builder</h1>
                <div>
                    {/* <label htmlFor='player'>Player:</label>
                    <input type="text" name="player" onChange={handleInput}/><br/> */}
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name="name" onChange={handleInput}/><br/>
                    {/* <label htmlFor='image'>Image:</label>
                    <input type="text" name="image" onChange={handleInput}/><br/> */}
                    <label htmlFor='level'>Level:</label>
                    <input type="number" name="level" onChange={handleInput}/><br/>
                    <label htmlFor='str'>Strength:</label>
                    <input type="number" name="str" onChange={handleInput}/><br/>
                    <label htmlFor='dex'>Dexterity:</label>
                    <input type="number" name="dex" onChange={handleInput}/><br/>
                    <label htmlFor='con'>Constitution:</label>
                    <input type="number" name="con" onChange={handleInput}/><br/>
                    <label htmlFor='int'>Intelligence:</label>
                    <input type="number" name="int" onChange={handleInput}/><br/>
                    <label htmlFor='wis'>Wisdom:</label>
                    <input type="number" name="wis" onChange={handleInput}/><br/>
                    <label htmlFor='cha'>Charisma:</label>
                    <input type="number" name="cha" onChange={handleInput}/><br/>
                    <label htmlFor='class'>Class:</label>
                    <select name="klass" onChange={handleInput}>
                        <option name="Default">---</option>
                        <option name="Barbarian">Barbarian</option>
                        <option name="Bard">Bard</option>
                        <option name="Cleric">Cleric</option>
                        <option name="Druid">Druid</option>
                        <option name="Fighter">Fighter</option>
                        <option name="Monk">Monk</option>
                        <option name="Paladin">Paladin</option>
                        <option name="Ranger">Ranger</option>
                        <option name="Rogue">Rogue</option>
                        <option name="Sorcerer">Sorcerer</option>
                        <option name="Warlock">Warlock</option>
                        <option name="Wizard">Wizard</option>
                    </select><br/>
                    <label htmlFor='race'>Race:</label>
                    <select name="race" onChange={handleInput}>
                        <option name="Default">---</option>
                        <option name="Dragonborn">Dragonborn</option>
                        <option name="Dwarf">Dwarf</option>
                        <option name="Elf">Elf</option>
                        <option name="Gnome">Gnome</option>
                        <option name="Half-Elf">Half-Elf</option>
                        <option name="Half-Orc">Half-Orc</option>
                        <option name="Halfling">Halfling</option>
                        <option name="Human">Human</option>
                        <option name="Tiefling">Tiefling</option>
                    </select><br/>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )

}