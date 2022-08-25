import styled from "styled-components"

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  form {
    grid-column: 2;
    display: grid;
  }

  
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 170px 170px;
  grid-template-rows: repeat(7, 60px);
  gap: 5px;

  div {
    grid-column: 1 / 3;
    text-align: center;
    white-space: nowrap;
  } 

  label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 25px;
  }
`

const EditGrid = styled.div`
  display: grid;
  grid-template-columns: 170px 170px;
  grid-template-rows: repeat(6, 60px);
  gap: 5px;

  div {
    grid-column: 1 / 3;
    text-align: center;
    white-space: nowrap;
  } 

  label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 25px;
  }
`

export { FormWrapper, EditGrid }
export default FormGrid