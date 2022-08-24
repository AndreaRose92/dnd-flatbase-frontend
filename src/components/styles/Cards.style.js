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
  background-color: #ba9d6a;
  box-sizing: inherit;
  display: flex;
  justify-content: center;
  
  img {
    border-radius: 20px;
    max-width: 170px;
    height: auto;
    padding: 15px;
  }

  h2 {
    
  }

  &:hover {
    background-color: #b5842f;
  }
`
export {CardBox}
export default Card