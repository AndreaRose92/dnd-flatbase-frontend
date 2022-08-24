// import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import PlayerCard from './PlayerCard'

import { PlayerGrid } from './styles/MainGrids.style'
import { CardBox } from './styles/Cards.style'

const Home = ({players, setCharacters}) => {
  

  const fetchCharacters = (r) => {
    fetch(`http://localhost:9292/${r}`)
      .then(r=>r.json())
      .then(data=>setCharacters(data))
  }

  const renderPlayers = players.map(player => {
    return (
      <CardBox as={Link}  to={`/${player.username}`} key={player.id}>
        <PlayerCard onClick={()=>fetchCharacters(player.username)} username={player.username} />
      </CardBox>
    )
  })

  return(
    <PlayerGrid>
      {renderPlayers}
    </PlayerGrid>
  )
}

export default Home