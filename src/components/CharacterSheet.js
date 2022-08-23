import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CharacterGrid, CharacterWrapper } from "./styles/MainGrids.style"
import { StatBox, CSHeader, AuxiliaryBox, HealthBox } from "./styles/CharacterSheetGrids.style"

export default function CharacterSheet() {
    const params = useParams()

    const [character, setCharacter] = useState({})
    const [race, setRace] = useState({})
    const [klass, setKlass] = useState({})

    useEffect(() => {
        fetch(`http://localhost:9292/${params.username}/${params.id}`)
            .then(r=>r.json())
            .then(data=> {setCharacter(data[0]); setRace(data[1]); setKlass(data[2])})
    },[])

    console.log(character, klass, race)

    return (
        <CharacterWrapper>
            <CharacterGrid>
                <CSHeader>
                    <div className='CSHeader1'>                
                        <p>Hello World</p>
                    </div>    
                    <div className='CSHeader2'>
                        <h1>{character.name}</h1>
                        <h4>{race.name}</h4>
                        <h4>{klass.name}</h4>
                    </div>
                </CSHeader>
                <StatBox>
                    <div>
                        <div><p>STRENGTH</p></div>
                        <div className="mid">
                            <h2>{`+num`}</h2>                            
                        </div>
                        <div className="bottom">
                            <h4>{character.str}</h4>
                        </div>                        
                    </div>
                </StatBox>
                <StatBox>
                    <div>
                        <div><p>DEXTERITY</p></div>
                        <div className="mid">
                            <h2>{`+num`}</h2>                            
                        </div>
                        <div className="bottom">
                            <h4>{character.dex}</h4>
                        </div>                        
                    </div>
                </StatBox>
                <StatBox>
                    <div>
                        <div><p>CONSTITUTION</p></div>
                        <div className="mid">
                            <h2>{`+num`}</h2>                            
                        </div>
                        <div className="bottom">
                            <h4>{character.con}</h4>
                        </div>                        
                    </div>
                </StatBox>
                <StatBox>
                    <div>
                        <div><p>INTELLIGENCE</p></div>
                        <div className="mid">
                            <h2>{`+num`}</h2>                            
                        </div>
                        <div className="bottom">
                            <h4>{character.int}</h4>
                        </div>                        
                    </div>
                </StatBox>
                <StatBox>
                    <div>
                        <div><p>WISDOM</p></div>
                        <div className="mid">
                            <h2>{`+num`}</h2>                            
                        </div>
                        <div className="bottom">
                            <h4>{character.wis}</h4>
                        </div>                        
                    </div>
                </StatBox>                
                <StatBox>
                    <div>
                        <div><p>CHARISMA</p></div>
                        <div className="mid">
                            <h2>{`+num`}</h2>                            
                        </div>
                        <div className="bottom">
                            <h4>{character.cha}</h4>
                        </div>                        
                    </div>
                </StatBox>
                <AuxiliaryBox>
                    <div>
                        <div><p>WALKING</p></div>
                        <div className="mid">
                            <h2>
                                {race.speed}
                            </h2>
                            <h4>{' ft.'}</h4>
                        </div>
                        <div className="bottom">
                            <h4>SPEED</h4>
                        </div>                        
                    </div>                    
                </AuxiliaryBox>
                <AuxiliaryBox>
                    <div>
                        <div><p>PROFICIENCY</p></div>
                        <div className="mid">
                            <h2>
                                {race.speed}
                            </h2>                            
                        </div>
                        <div className="bottom">
                            <h4>BONUS</h4>
                        </div>                        
                    </div>
                </AuxiliaryBox>
                <HealthBox>
                    <div>
                        <div><p>CURRENT</p></div>
                        <div><h2>42</h2></div>
                    </div>
                    <div>
                        <div><p>MAXIMUM</p></div>
                        <div><h2>42</h2></div>
                        <div className="bottom">
                            <h4>{'HEALTH & STATUS'}</h4>
                        </div>
                    </div>
                    <div>
                        <div><p>TEMPORARY</p></div>
                        <div><h2>42</h2></div>
                    </div>
                </HealthBox>
            </CharacterGrid>
        </CharacterWrapper>
    )
}