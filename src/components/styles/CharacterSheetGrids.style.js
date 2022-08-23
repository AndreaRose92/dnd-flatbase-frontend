import styled from "styled-components";

const CSHeader = styled.section`
  grid-area: hd;
  display: flex;

  div.CSHeader1 {
    width: 110px;
  }

  div.CSHeader2 {
    margin-left: 25px;
  }

`

const StatBox = styled.section`
  margin: 5px 15px;
  border: 3px double white;
  display: flex;
  justify-content: center;

  div {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100px;
    height: 30px;
    text-align: center;
  }

  .mid {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
  }

  .bottom {
    padding-top: 15px;
  }
  
`

const AuxiliaryBox = styled.section`
  margin: 5px;
  border: 3px double white;
  display: flex;
  justify-content: center;

  div {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100px;
    height: 30px;
    text-align: center;
  }

  .mid {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
  }

  .bottom {
    padding-top: 15px;
  }
`

const HealthBox = styled.section`
  grid-area: hb;
  margin: 5px;
  border: 3px double white;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;

  div {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100px;
    height: 30px;
    text-align: center;
  }

  .bottom {
    padding-top: 15px;
  }
`

export {StatBox, CSHeader, AuxiliaryBox, HealthBox}