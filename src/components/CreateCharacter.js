import { useParams, useHistory } from "react-router-dom";
import { useState } from "react"

import Input, { SubmitInput, SelectInput } from "./styles/Input.style"
import FormGrid, { FormWrapper } from "./styles/FormGrids.style"

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
        <FormWrapper>
            <form className='newCharacter' onSubmit={(e)=>handleSubmit(e)}>
                
                <FormGrid>
                    <div><h1>Character Builder</h1></div>
                    {/* <label htmlFor='player'>Player:</label>
                    <input type="text" name="player" onChange={handleInput}/><br/> */}
                    <label htmlFor='name'>Name:
                        <Input type="text" name="name" onChange={handleInput}/>
                    </label>
                    {/* <label htmlFor='image'>Image:</label>
                    <input type="text" name="image" onChange={handleInput}/> */}
                    <label htmlFor='level'>Level:
                        <Input type="number" name="level" onChange={handleInput}/>
                    </label>
                    <label htmlFor='str'>Strength:
                        <Input type="number" name="str" onChange={handleInput}/>
                    </label>
                    <label htmlFor='dex'>Dexterity:
                        <Input type="number" name="dex" onChange={handleInput}/>
                    </label>
                    <label htmlFor='con'>Constitution:
                        <Input type="number" name="con" onChange={handleInput}/>
                    </label>
                    <label htmlFor='int'>Intelligence:
                        <Input type="number" name="int" onChange={handleInput}/>
                    </label>
                    <label htmlFor='wis'>Wisdom:
                        <Input type="number" name="wis" onChange={handleInput}/>
                    </label>
                    <label htmlFor='cha'>Charisma:
                        <Input type="number" name="cha" onChange={handleInput}/>
                    </label>
                    <label htmlFor='class'>Class:
                    <SelectInput name="klass" onChange={handleInput}>
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
                    </SelectInput>
                    </label>
                    <label htmlFor='race'>Race:
                    <SelectInput name="race" onChange={handleInput}>
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
                    </SelectInput>
                    </label>
                    <div><SubmitInput type="submit"/></div>
                </FormGrid>
            </form>
        </FormWrapper>
    )

}