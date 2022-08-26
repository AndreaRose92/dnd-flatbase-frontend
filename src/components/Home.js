import { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import PlayerCard from './PlayerCard'

import { PCWrapper, PlayerGrid } from './styles/MainGrids.style'
import Card, { CardBox, InnerCardGrid, TopSection } from './styles/Cards.style'
import Input, { SubmitInput } from './styles/Input.style'
import playersBanner from '../images/playerslgbtq+.png'
import plus from '../images/plus.png'

const Home = ({players, setPlayers}) => {

  const history = useHistory()
  const [newPlayer, setNewPlayer] = useState('')

  const handleInput = (e) => {
    let formName = e.target.name
    let formValue = e.target.value
    setNewPlayer(formValue)
    console.log(`${formName}: ${formValue}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/new-player`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: newPlayer
      })
    })
      .then(r=>r.json())
      .then(data=>setPlayers(players => [...players, data]))
    setNewPlayer('')
  }

  const renderPlayers = players.map(player => {
    return (
      <CardBox as={Link}  to={`/${player.username}`} key={player.id}>
        <PlayerCard username={player.username} />
      </CardBox>
    )
  })

  return(
    <PCWrapper>
      <section>
        <img src={playersBanner} alt='Players banner'/>
      </section>
      <PlayerGrid>
        {renderPlayers}
        <Card>
          <InnerCardGrid>
            <TopSection>
              <img src={plus} alt='New player plus sign'/><br/>
              <form onSubmit={handleSubmit}>
                <label htmlFor="newPlayer">New Player:</label>
                <Input type="text" name="newPlayer" value={newPlayer} onChange={handleInput} />
                <SubmitInput type="submit" />
              </form>
            </TopSection>
            <div>
            </div>
          </InnerCardGrid>
        </Card>
      </PlayerGrid>
    </PCWrapper>
  )
}

export default Home