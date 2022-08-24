// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PlayerCard from './PlayerCard'

import { PlayerGrid } from './styles/MainGrids.style'
import Card, { CardBox, InnerCardGrid, TopSection } from './styles/Cards.style'

const Home = ({players, setCharacters}) => {
  

  // const fetchCharacters = (r) => {
  //   fetch(`http://localhost:9292/${r}`)
  //     .then(r=>r.json())
  //     .then(data=>setCharacters(data))
  // }

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
      <Card as={Link} to={`/HALP I NEED AN ENDPOINT`}>
        <InnerCardGrid>
          <TopSection>
            <img alt='New character plus sign'/><br/>
            <h2>New Player</h2>
          </TopSection>
          <div>
          </div>
        </InnerCardGrid>
      </Card>
    </PlayerGrid>
  )
}

export default Home