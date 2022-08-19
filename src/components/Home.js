import { useEffect, useState } from "react"
import PlayerCard from './PlayerCard'

const Home = () => {
  
  const [players, setPlayers] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/')
      .then(r=>r.json())
      .then(data=>setPlayers(data))
  }, [])
  
  console.log(players)
  const renderPlayers = players.map(player => {
    return <PlayerCard key={player.id} id={player.id} username={player.username} />
  })

  return(
    <div>
      {renderPlayers}
    </div>
  )
}

export default Home