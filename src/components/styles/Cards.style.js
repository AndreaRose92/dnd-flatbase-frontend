import styled from "styled-components"

const CardBox = styled.nav`
  display: flex;
  justify-content: center;
  text-decoration-color: #191818;
`

const Card = styled.div`
  width: 92%;
  max-width: 220px;
  height: 300px;
  transition: 0.3s;
  border-radius: 10px;
  border: 2px outset #d4af37;
  background: radial-gradient(farthest-corner at 40px 40px,
    #fff 0%, #aaa9ad 100%);
  box-shadow: 2px 6px 4px black;
  box-sizing: inherit;
  display: flex;
  justify-content: center;
  
  
  button {
    height: 30px;
    width: 30px;
  }

  &:hover {
    background-color: #b5842f;
    transform: scale(1.05);
    box-shadow: 3px 7px 6px black;
    transition: 0.3s;
  }
`

const InnerCardGrid = styled.div`
  width: 220px;
  display: grid;
  grid-template-rows: 250px 50px;
  text-decoration: none;

  div.bottom {
    width: 220px;
    display: inline-flex;
    justify-content: space-evenly;
  }  
`

const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 20px;
    max-width: 160px;
    height: 160px;
    padding: 10px;
  }

  h2 {
    padding: 10px;
  }
`



export {CardBox, InnerCardGrid, TopSection}
export default Card