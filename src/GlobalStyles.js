import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('//db.onlinewebfonts.com/c/2eba1e44ff150d867122736d358c496f?family=Draconis');

  * {
    font-family: 'Draconis';
    margin: 0;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 13px;
  }

`
export default GlobalStyles