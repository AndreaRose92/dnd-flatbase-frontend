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
    white-space: nowrap;
  }

  .bottom {
    padding-top: 15px;
  }
`

const SavingThrow = styled.section`
  grid-area: st;
  margin: 5px 15px;
  border: 3px double white;
  display: flex;

  div {
    width: 300px;
    height: auto;
    text-align: center;
    margin-left: 10px;
  }

  .top {
    
    padding-top: 5px;
    height: 60%;
    display: grid;
    grid-template-columns: 30px 120px 30px 120px;
    grid-template-rows: repeat(3, 1fr);
  }

  .bottom {
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }

  div > div {
    display: flex;
    align-items: center;
    justify-content: left;
  }
`

const SensesBox = styled.section`
  grid-area: sn;
  margin: 5px 15px;
  border: 3px double white;
`

const ProficiencyBox = styled.section`
  grid-area: pb;
  margin: 5px 15px;
  border: 3px double white;
`

const EquipmentBox = styled.section`
  grid-area: eb;
  margin: 5px;
  border: 3px double white;
`

export {StatBox, CSHeader, AuxiliaryBox, HealthBox, SavingThrow, ProficiencyBox, EquipmentBox, SensesBox}