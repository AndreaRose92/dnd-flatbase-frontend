import { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import PlayerCard from './PlayerCard'

import { PlayerGrid } from './styles/MainGrids.style'
import Card, { CardBox, InnerCardGrid, TopSection } from './styles/Cards.style'

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
  }

  const renderPlayers = players.map(player => {
    return (
      <CardBox as={Link}  to={`/${player.username}`} key={player.id}>
        <PlayerCard username={player.username} />
      </CardBox>
    )
  })

  return(
    <PlayerGrid>
      {renderPlayers}
      <Card>
        <InnerCardGrid>
          <TopSection>
            <img alt='New player plus sign'/><br/>
            <form onSubmit={handleSubmit}>
              <label htmlFor="newPlayer">New Player:</label>
              <input type="text" name="newPlayer" onChange={handleInput} />
              <input type="submit" />
            </form>
          </TopSection>
          <div>
          </div>
        </InnerCardGrid>
      </Card>
    </PlayerGrid>
  )
}

export default Home