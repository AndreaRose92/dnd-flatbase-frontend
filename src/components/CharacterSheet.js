import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { CharacterGrid, CharacterWrapper } from "./styles/MainGrids.style"
import { StatBox, CSHeader, AuxiliaryBox, InspirationBox, HealthBox, SavingThrow, ProficiencyBox, EquipmentBox, SensesBox, InitiativeBox, ArmorClass, DefensesConditions, EquipmentWrap } from "./styles/CharacterSheetGrids.style"
import Input, { HealthInput } from "./styles/Input.style"
import Button, { HealthButton } from './styles/Buttons.style'

export default function CharacterSheet() {
    const params = useParams()
    const [isInspired, setIsInspired] = useState(false)
    const [character, setCharacter] = useState({})
    const [race, setRace] = useState({traits: '', languages: ''})
    const [klass, setKlass] = useState({})
    const [charSkills, setCharSkills] = useState([''])
    const [spells, setSpells] = useState([])
    const [eqBoxSelected, setEqBoxSelected] = useState("spells")
    const [newHP, setNewHP] = useState(0)
    const skills = [{name: 'Acrobatics', stat: 'dex'}, {name: 'Animal Handling', stat: 'wis'}, {name: 'Arcana', stat: 'int'}, {name: 'Athletics', stat: 'str'}, {name: 'Deception', stat: 'cha'}, {name: 'History', stat: 'int'}, {name: 'Insight', stat: 'wis'}, {name: 'Intimidation', stat: 'cha'}, {name: 'Investigation', stat: 'int'}, {name: 'Medicine', stat: 'wis'}, {name: 'Nature', stat: 'int'}, {name: 'Perception', stat: 'wis'}, {name: 'Performance', stat: 'cha'}, {name: 'Persuasion', stat: 'cha'}, {name: 'Religion', stat: 'int'}, {name: 'Sleight of Hand', stat: 'dex'}, {name: 'Stealth', stat: 'dex'}, {name: 'Survival', stat: 'wis'}]

    useEffect(() => {
        fetch(`http://localhost:9292/${params.username}/${params.id}`)
            .then(r=>r.json())
            .then(data=> {setCharacter(data[0]); setRace(data[1]); setKlass(data[2]); setCharSkills(charSkills => data[3].flatMap(skill => skill)); setSpells(data[4])})},[params.username, params.id])

    const handleHP = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/${params.username}/${params.id}/${e.target.name}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({newHP})
        })
            .then(r=>r.json())
            .then(data=>setCharacter(data))
    }

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
        let total
        prof ? total = `+${parseInt(statCalculation(stat)) + parseInt(proficiencyBonus(lvl))}` : total = statCalculation(stat)
        return total
    }

    const renderSkills = skills.map(skill => {
            return (<>
                <h3>{charSkills.includes(skill.name) ? "●" : "○"}</h3>
                <h3>{skill.stat}</h3>
                <h3 className="skill">{skill.name}</h3>
                <h3>{skillProficiency(charSkills.includes(skill.name), character[skill.stat], character.level)}</h3>
            </>)
        })

    const renderSpells = spells.sort((a,b)=>a.level-b.level).map(spell => {
        return (
            <>                
                <h4>{spell.level}</h4>
                <h4 className="skill">{spell.name}</h4>
                <h4>{spell.casting_time}</h4>
                <h4>{spell.range}</h4>
                <div className="spell-desc"><h4>{spell.description}</h4></div>
            </>
        )
    })

    const handleEquipmentBoxClick = (e) => {
        setEqBoxSelected(e.target.value)
    }

    const renderEqBoxType = () => {
        if(eqBoxSelected === 'spells') {
            return (
                <EquipmentWrap>
                    <div className="eq-header">
                        <p>LEVEL</p>                        
                        <p>SKILL</p>
                        <p>TIME</p>
                        <p>RANGE</p>
                        <p>DESCRIPTION</p>
                    </div>
                    <div className="eq-bottom">
                        <div className="eq-grid">{renderSpells}</div>
                    </div>
                </EquipmentWrap>
            )
        } else if (eqBoxSelected === 'actions') {
            return (
                <EquipmentWrap>
                    <div className="eq-header">
                        <p></p>                        
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="eq-bottom">
                        <div className="eq-grid">
                            <div></div>
                            <h2>Coming Soon...</h2>
                        </div>
                    </div>
                </EquipmentWrap>
            )
        } else if (eqBoxSelected === 'equipment') {
            return (
                <EquipmentWrap>
                    <div className="eq-header">
                        <p></p>                        
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="eq-bottom">
                        <div className="eq-grid">
                            <div></div>
                            <h2>Coming Soon...</h2>
                        </div>
                    </div>
                </EquipmentWrap>
            )
        } else if (eqBoxSelected === 'traits') {
            return (
                <EquipmentWrap>
                    <div className="eq-header">
                        <p></p>                        
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="eq-bottom">
                        <div className="eq-grid">
                            <div></div>
                            <h2>Coming Soon...</h2>
                        </div>
                    </div>
                </EquipmentWrap>
            )
        } else if (eqBoxSelected === 'extras') {
            return (
                <EquipmentWrap>
                    <div className="eq-header">
                        <p></p>                        
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="eq-bottom">
                        <div className="eq-grid">
                            <div></div>
                            <h2>Coming Soon...</h2>
                        </div>
                    </div>
                </EquipmentWrap>
            )
        }
    }

    return (
        <CharacterWrapper>
            <CharacterGrid>
                <CSHeader>                
                    <div className='CSHeader1'>                
                        <img src={character.image} alt='Character avatar'/>
                        
                    </div>    
                    <div className='CSHeader2'>
                        <h1>{character.name}</h1>
                        <div>                            
                            <h2>{`Level ${character.level} ${race.name} ${klass.name}`}</h2>
                        </div>
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
                <InspirationBox>
                    <div>
                        <div onClick={() => setIsInspired(isInspired => !isInspired) } className="inspiration-box">
                            <h1>{isInspired ? '☀︎' : ''}</h1>
                        </div>
                        <div className="bottom">
                            <h4>INSPIRATION</h4>
                        </div>
                    </div>
                </InspirationBox>
                <HealthBox>
                    <div className="heal-buttons">
                        <HealthButton name="heal" onClick={handleHP}>Heal</HealthButton>
                        <HealthInput value={newHP} onChange={e=>setNewHP(e.target.value)} className="mid" type='number'/>
                        <HealthButton variant='rust' name='damage' onClick={handleHP}>Damage</HealthButton>
                    </div>
                    <div>
                        <div><p>CURRENT</p></div>
                        <div className="mid"><h2>{character.current_hp}</h2></div>                        
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
                            <div><div>{charSkills.includes("Str Save") ? "●" : "○"}</div></div>
                            <div><h3>{`Str ${skillProficiency(charSkills.includes("Str Save"), character.str, character.level)}`}</h3></div>
                            <div><div>{charSkills.includes("Int Save") ? "●" : "○"}</div></div>
                            <div><h3>{`Int ${skillProficiency(charSkills.includes("Int Save"), character.int, character.level)}`}</h3></div>
                            <div><div>{charSkills.includes("Dex Save") ? "●" : "○"}</div></div>
                            <div><h3>{`Dex ${skillProficiency(charSkills.includes("Dex Save"), character.dex, character.level)}`}</h3></div>
                            <div><div>{charSkills.includes("Wis Save") ? "●" : "○"}</div></div>
                            <div><h3>{`Wis ${skillProficiency(charSkills.includes("Wis Save"), character.wis, character.level)}`}</h3></div>
                            <div><div>{charSkills.includes("Con Save") ? "●" : "○"}</div></div>
                            <div><h3>{`Con ${skillProficiency(charSkills.includes("Con Save"), character.con, character.level)}`}</h3></div>
                            <div><div>{charSkills.includes("Cha Save") ? "●" : "○"}</div></div>
                            <div><h3>{`Cha ${skillProficiency(charSkills.includes("Cha Save"), character.cha, character.level)}`}</h3></div>
                        </div>
                        <div className="mid">
                            <p>
                                Saving throw modifiers
                            </p>                            
                        </div>
                        <div className="bottom">
                            <h4>SAVING THROWS</h4>
                        </div>                        
                    </div>
                </SavingThrow>
                <SensesBox>                    
                    <p>LANGUAGES</p>
                    <h3>{race.languages.replace(/[\[\]"]+/g, '')}</h3>
                    <p>TRAITS</p>
                    <h3>{race.traits.replace(/[\[\]"]+/g, '').replace(/[,]/g, '\n')}</h3>
                </SensesBox>
                <ProficiencyBox>
                    <div className="pro-header">
                        <p>PROF.</p>
                        <p>MODIFIER</p>
                        <p className="skill">SKILL</p>
                        <p>BONUS</p>
                    </div>
                    <div className="pro-grid">{renderSkills}</div>
                </ProficiencyBox>
                <InitiativeBox>
                    <div>
                        <div><h4>INITIATIVE</h4></div>
                        <div className="mid">
                            <h2>{statCalculation(character.dex)}</h2>
                        </div>
                        <div className="bottom">
                        </div>                        
                    </div>
                </InitiativeBox>
                <ArmorClass>
                    <div>
                        <div className="top"><p>ARMOR</p></div>
                        <div className="mid">
                            <h2>{10 + parseInt(statCalculation(character.dex))}</h2>
                        </div>
                        <div className="bottom"><p>CLASS</p></div>                        
                    </div>
                </ArmorClass>
                <DefensesConditions>
                    <div>
                        <div><p>DEFENSES</p></div>
                        <div className="mid">
                            
                        </div>                        
                    </div>
                    <div>
                        <div><p>CONDITIONS</p></div>
                        <div className="mid"></div>
                        <div className="bottom">
                            
                        </div>
                    </div>
                </DefensesConditions>
                <EquipmentBox>
                    <div className="eq-box-header">
                        <Button onClick={handleEquipmentBoxClick} value='spells'>SPELLS</Button>
                        <Button onClick={handleEquipmentBoxClick} value='actions'>ACTIONS</Button>
                        <Button onClick={handleEquipmentBoxClick} value='equipment'>EQUIPMENT</Button>
                        <Button onClick={handleEquipmentBoxClick} value='traits'>TRAITS</Button>
                        <Button onClick={handleEquipmentBoxClick} value='extras'>EXTRAS</Button>
                    </div>
                    {renderEqBoxType()}
                </EquipmentBox>
                
            </CharacterGrid>
        </CharacterWrapper>
    )
}