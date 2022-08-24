// import { useEffect, useState } from "react"
import { Link, useParams, Route, useRouteMatch} from "react-router-dom"
// import PlayerCard from './PlayerCard'
import CharacterSheet from './CharacterSheet';
import CreateCharacter from './CreateCharacter';

const Home = ({players}) => {

  const match = useRouteMatch()
  

  // const fetchCharacters = (r) => {
  //   fetch(`http://localhost:9292/${r}`)
  //     .then(r=>r.json())
  //     .then(data=>setCharacters(data))
  // }

  const renderPlayers = players.map(player => {
    return (
      <div key={player.id}>
        <Link  key={player.id}  to={`/${player.username}`}>
          {/* <h2 onClick={()=>fetchCharacters(player.username)} >{player.username}</h2> */}
          {player.username}
        </Link>
      </div>
    )
  })

  return(
    <div>
      {renderPlayers}
    </div>
  )
}

export default Home