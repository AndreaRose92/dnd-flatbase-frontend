import {Routes, Route, matchPath} from 'react-router-dom'
import GlobalStyles from '../GlobalStyles';
import CharacterPage from './CharacterPage';
import { useEffect, useState } from 'react';
import Home from './Home'
import NavBar from './NavBar'

import PageWrapper, { ContentWrapper } from "./styles/Grids.style"
// import CharacterSheet from './CharacterSheet';

function App() {
  // const match = matchPath()

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
        <Routes>          
          <Route exact path ="/" element={<Home players={players}/>}/>
          <Route exact path ='/:id' element={<CharacterPage players={players}/>}/>
          {/* <Route exact path={`/${match.url}/:id`} element={<CharacterSheet />} /> */}
        </Routes>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default App;
