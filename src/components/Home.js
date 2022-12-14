import { useState } from "react";
import { Link } from "react-router-dom"
import PlayerCard from './PlayerCard'
import { PCWrapper, PlayerGrid } from './styles/MainGrids.style'
import Card, { CardBox, InnerCardGrid, TopSection } from './styles/Cards.style'
import Input, { SubmitInput } from './styles/Input.style'
import playersBanner from '../images/playerslgbtq+.png'
import plus from '../images/plus.png'

const Home = ({players, setPlayers}) => {

  const [newPlayer, setNewPlayer] = useState({username: '', image: ''})

  const handleInput = (e) => {
    let formName = e.target.name
    let formValue = e.target.value
    setNewPlayer({
      ...newPlayer,
      [formName]: formValue
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/new-player`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: newPlayer.username,
        image: newPlayer.image
      })
    })
      .then(r=>r.json())
      .then(data=>setPlayers(players => [...players, data]))
    setNewPlayer({username: '', image: ''})
  }

  const renderPlayers = players.map(player => {
    return (
      <CardBox as={Link}  to={`/${player.username}`} key={player.id}>
        <PlayerCard username={player.username} image={player.image} />
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
                <label htmlFor="username">Player Name:</label>
                <Input type="text" name="username" value={newPlayer.username} onChange={handleInput} /><br/>
                <label htmlFor="image">Player Avatar:</label>
                <Input type="text" name="image" value={newPlayer.image} onChange={handleInput} /><br/>
                <SubmitInput type="submit" />
              </form>
            </TopSection>
          </InnerCardGrid>
        </Card>
      </PlayerGrid>
    </PCWrapper>
  )
}

export default Home