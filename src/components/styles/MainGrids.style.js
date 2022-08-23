import styled from "styled-components";

const PageWrapper = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  gap: 10px;
`

const ContentWrapper = styled.div`
  grid-row: 2;
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
  ;
  gap: 10px;
`

export {ContentWrapper, CharacterWrapper, CharacterGrid}
export default PageWrapper