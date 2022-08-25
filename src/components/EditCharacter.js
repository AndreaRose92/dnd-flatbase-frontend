import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react"

import Input, {SubmitInput} from "./styles/Input.style"
import { FormWrapper, EditGrid } from "./styles/FormGrids.style"

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
        <FormWrapper>
            <form className='updatedCharacter' onSubmit={(e)=>handleSubmit(e)}>
                
                <EditGrid>
                    <div><h1>Character Editor</h1></div>
                    <label htmlFor='name'>Name:
                        <Input type="text" value={updatedCharacter.name} name="name" onChange={handleInput}/>
                    </label>
                    <label htmlFor='level'>Level:
                        <Input type="number" value={updatedCharacter.level} name="level" onChange={handleInput}/>
                    </label>
                    <label htmlFor='str'>Strength:
                        <Input type="number" value={updatedCharacter.str} name="str" onChange={handleInput}/>
                    </label>
                    <label htmlFor='dex'>Dexterity:
                        <Input type="number" value={updatedCharacter.dex} name="dex" onChange={handleInput}/>
                    </label>
                    <label htmlFor='con'>Constitution:
                        <Input type="number" value={updatedCharacter.con} name="con" onChange={handleInput}/>
                    </label>
                    <label htmlFor='int'>Intelligence:
                        <Input type="number" value={updatedCharacter.int} name="int" onChange={handleInput}/>
                    </label>
                    <label htmlFor='wis'>Wisdom:
                        <Input type="number" value={updatedCharacter.wis} name="wis" onChange={handleInput}/>
                    </label>
                    <label htmlFor='cha'>Charisma:
                        <Input type="number" value={updatedCharacter.cha} name="cha" onChange={handleInput}/>
                    </label>
                    <div><SubmitInput type="submit"/></div>
                </EditGrid>
            </form>
        </FormWrapper>
    )

}