// import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
// import PlayerCard from './PlayerCard'

const Home = ({players, setCharacters}) => {
  

  const fetchCharacters = (r) => {
    fetch(`http://localhost:9292/${r}`)
      .then(r=>r.json())
      .then(data=>setCharacters(data))
  }

  const renderPlayers = players.map(player => {
    return (
      <Link  key={player.id}  to={`/${player.username}`}>
        <h2 onClick={()=>fetchCharacters(player.username)} >{player.username}</h2>
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