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
  border: 3px double purple;
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
  border: 3px double purple;
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

const InspirationBox = styled.section`
  grid-area: in;
  margin: 5px;
  
  div {
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 100px;
    height: 50px;
    text-align: center;
  }

  .inspiration-box {
    border: 3px double purple;
    height: 60px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom {
    padding-top: 12px;
  }
`

const HealthBox = styled.section`
  grid-area: hb;
  margin: 5px;
  border: 3px double purple;
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
  border: 3px double purple;
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
  border: 3px double purple;
`

const ProficiencyBox = styled.section`
  grid-area: pb;
  margin: 5px 15px;
  padding: 5px 10px;
  border: 3px double purple;

  .pro-header {
    display: grid;
    height: 30px;
    grid-template-columns: 50px 70px 130px 50px;
    grid-template-rows: 1fr;
    align-items: center;
    text-align: center;
  }

  .skill {
    padding-left: 5px;
    text-align: left;
  }

  .pro-grid {
    display: grid;
    height: 30px;
    grid-template-columns: 50px 70px 130px 50px;
    grid-template-rows: 1fr;
    align-items: center;
    text-align: center;
  }
`

const InitiativeBox = styled.section`
  grid-area: it;
  margin: 5px;

  div {
    display: grid;
    grid-template-rows: 20px 60px 20px;
    width: 100px;
    text-align: center;
  }  

  .mid {
    border: 3px double purple;
    height: 50px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const ArmorClass = styled.section`
  grid-area: ac;
  margin: 5px;
  border: 3px double purple;

  div {
    display: grid;
    grid-template-rows: 30px;
    width: 90px;
    text-align: center;
  }

  .top {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .mid {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bottom {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`

const DefensesConditions = styled.section`
  grid-area: dc;
  margin: 5px;
  border: 3px double purple;
`

const EquipmentBox = styled.section`
  grid-area: eb;
  margin: 5px;
  border: 3px double purple;
`

export {StatBox, CSHeader, AuxiliaryBox, InspirationBox, HealthBox, SavingThrow, ProficiencyBox, EquipmentBox, SensesBox, ArmorClass, DefensesConditions, InitiativeBox}