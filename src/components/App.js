import {Routes, Route} from 'react-router-dom'
import GlobalStyles from '../GlobalStyles';

import Home from './Home'
import NavBar from './NavBar'

import PageWrapper, { ContentWrapper } from "./styles/Grids.style"

function App() {
  return (
    <PageWrapper>
      <GlobalStyles/>
      <NavBar/>
        <ContentWrapper>
        <Routes>          
          <Route exact path ="/" element={<Home/>}/>
        </Routes>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default App;
