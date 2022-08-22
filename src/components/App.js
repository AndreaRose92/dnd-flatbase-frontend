import {Switch, Route, useRouteMatch} from 'react-router-dom'
import GlobalStyles from '../GlobalStyles';
import CharacterPage from './CharacterPage';
import CharacterSheet from './CharacterSheet';
import { useEffect, useState } from 'react';
import Home from './Home'
import NavBar from './NavBar'

import PageWrapper, { ContentWrapper } from "./styles/Grids.style"
// import CharacterSheet from './CharacterSheet';

function App() {

  const match = useRouteMatch()

  const [players, setPlayers] = useState([])

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
            <Home players={players}/>
          </Route>
          <Route exact path ='/:username'>
            <CharacterPage players={players}/>
          </Route>
          {/* <Route exact path={`/${match.url}/:id`}>
            <CharacterSheet />
          </Route> */}
        </Switch>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default App;
