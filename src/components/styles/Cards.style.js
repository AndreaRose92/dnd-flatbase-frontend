import styled from "styled-components"

const CardBox = styled.nav`
  display: flex;
  justify-content: center;
  text-decoration-color: #191818;
`

const Card = styled.div`
  width: 92%;
  max-width: 250px;
  height: 300px;
  transition: 0.3s;
  border-radius: 10px;
  border: 3px double purple;
  background-color: #ba9d6a;
  box-sizing: inherit;
  display: flex;
  justify-content: center;
  
  button {
    height: 30px;
    width: 30px;
  }

  &:hover {
    background-color: #b5842f;
  }
`

const InnerCardGrid = styled.div`
  width: 250px;
  display: grid;
  grid-template-rows: 250px 50px;
  text-decoration: none;

  div.bottom {
    width: 250px;
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
    max-width: 210px;
    height: 210px;
    padding: 10px;
  }

  h2 {
    padding: 10px;
  }

`

export {CardBox, InnerCardGrid, TopSection}
export default Card