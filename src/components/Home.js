// import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import PlayerCard from './PlayerCard'

const Home = ({players}) => {
  
  
  console.log(players)
  const renderPlayers = players.map(player => {
    return (<Link  key={player.id}  to={`/${player.id}`}>
      <PlayerCard id={player.id} username={player.username} />
      </Link>
      )
  })

  return(
    <div>
      {renderPlayers}
    </div>
  )
}

export default Home