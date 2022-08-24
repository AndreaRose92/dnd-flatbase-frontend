import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CharacterGrid, CharacterWrapper } from "./styles/MainGrids.style"
import { StatBox, CSHeader, AuxiliaryBox, HealthBox, SavingThrow, ProficiencyBox, EquipmentBox, SensesBox } from "./styles/CharacterSheetGrids.style"

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

    // console.log(character)
    // const stats = {
    //     str: character.str,
    //     dex: character.dex,
    //     con: character.con,
    //     int: character.int,
    //     wis: character.wis,
    //     cha: character.cha
    // }


    function statCalculation(num) {
        let modifier = Math.floor((num - 10) / 2)
        if (modifier > 0) {
            return `+${modifier}`
        } else if (modifier < 0) {
            return `${modifier}`
        } else {return 0}
    }

    function proficiencyBonus(num) {
        let bonus = Math.ceil((1+num)/4)
        if (bonus > 0) {
            return `+${bonus}`
        } else if (bonus < 0) {
            return `-${bonus}`
        } else {return 0}
    }


    function skillProficiency(prof, stat, lvl) {
        // if proficient = true ? stat + proficiency : stat
        let total
        prof ? total = `+${parseInt(statCalculation(stat)) + parseInt(proficiencyBonus(lvl))}` : total = statCalculation(stat)
        return total
    }



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
                            <h2>{statCalculation(character.str)}</h2>
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
                        <h2>{statCalculation(character.dex)}</h2>    
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
                            <h2>{statCalculation(character.con)}</h2>
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
                            <h2>{statCalculation(character.int)}</h2>          
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
                            <h2>{statCalculation(character.wis)}</h2>          
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
                            <h2>{statCalculation(character.cha)}</h2>          
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
                                {proficiencyBonus(character.level)}
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
                        <div className="mid"><h2>{character.hp}</h2></div>
                    </div>
                    <div>
                        <div><p>MAXIMUM</p></div>
                        <div className="mid"><h2>{character.hp}</h2></div>
                        <div className="bottom">
                            <h4>{'HEALTH & STATUS'}</h4>
                        </div>
                    </div>
                    <div>
                        <div><p>TEMPORARY</p></div>
                        <div className="mid"><h2>{'--'}</h2></div>
                    </div>
                </HealthBox>
                <SavingThrow>
                    <div>
                        <div className="top">
                            <div><div>0</div></div>
                            <div><h3>{`Str ${skillProficiency(true, character.str, character.level)}`}</h3></div>
                            <div><div>0</div></div>
                            <div><h3>{`Int ${skillProficiency(false, character.int, character.level)}`}</h3></div>
                            <div><div>0</div></div>
                            <div><h3>{`Dex ${skillProficiency(true, character.dex, character.level)}`}</h3></div>
                            <div><div>0</div></div>
                            <div><h3>{`Wis ${skillProficiency(true, character.wis, character.level)}`}</h3></div>
                            <div><div>0</div></div>
                            <div><h3>{`Con ${skillProficiency(true, character.con, character.level)}`}</h3></div>
                            <div><div>0</div></div>
                            <div><h3>{`Con ${skillProficiency(true, character.cha, character.level)}`}</h3></div>
                        </div>
                        <div className="mid">
                            <p>
                                test
                            </p>                            
                        </div>
                        <div className="bottom">
                            <h4>TEST</h4>
                        </div>                        
                    </div>
                </SavingThrow>
                <SensesBox>
                    
                </SensesBox>
                <ProficiencyBox>

                </ProficiencyBox>
                <EquipmentBox>

                </EquipmentBox>
                
            </CharacterGrid>
        </CharacterWrapper>
    )
}