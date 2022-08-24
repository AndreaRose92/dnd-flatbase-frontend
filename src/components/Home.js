import { useState } from "react";
import { Link, useHistory } from "react-router-dom"

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="newPlayer">New Player:</label>
        <input type="text" name="newPlayer" onChange={handleInput} />
      <input type="submit" />
      </form>
    </div>
  )
}

export default Home