import {Switch, Route} from 'react-router-dom'
import GlobalStyles from '../GlobalStyles';
import CharacterPage from './CharacterPage';
import CharacterSheet from './CharacterSheet';
import { useEffect, useState } from 'react';
import Home from './Home'
import NavBar from './NavBar'

import PageWrapper, { ContentWrapper } from "./styles/Grids.style"
// import CharacterSheet from './CharacterSheet';

function App() {

  const [players, setPlayers] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/')
      .then(r=>r.json())
      .then(data=>setPlayers(data))
  }, [])
  
  return (
    <PageWrapper>
      <GlobalStyles/>
      <NavBar/>
      <ContentWrapper>
        <Switch>          
          <Route exact path ="/">
            <Home players={players} setCharacters={setCharacters}/>
          </Route>
          <Route exact path ='/:username'>
            <CharacterPage players={players} characters={characters} />
          </Route>
          <Route exact path={`/:username/:id`}>
            <CharacterSheet characters={characters} />
          </Route>
        </Switch>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default App;
