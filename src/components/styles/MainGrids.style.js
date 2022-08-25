import styled from "styled-components";

const PageWrapper = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px calc(100vh - 100px);
  gap: 10px;
`

const ContentWrapper = styled.div`
  grid-row: 2;
`

const PlayerGrid = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  justify-items: center;
`

const CharacterWrapper = styled.div`
  margin: 25px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
`

const CharacterGrid = styled.div`
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(12, 110px);
  grid-template-rows: repeat(6, 110px);
  grid-template-areas: 
  'hd hd hd hd hd hd hd hd hd hd hd hd'
  'sb sb sb sb sb sb ab ab in hb hb hb'
  'st st st pb pb pb it ac dc dc dc dc'
  'st st st pb pb pb eb eb eb eb eb eb'
  'sn sn sn pb pb pb eb eb eb eb eb eb'
  'sn sn sn pb pb pb eb eb eb eb eb eb'
  ;
  gap: 10px;
`

export {ContentWrapper, CharacterWrapper, CharacterGrid, PlayerGrid}
export default PageWrapper