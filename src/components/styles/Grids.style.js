import styled from "styled-components";

const PageWrapper = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;
  gap: 20px;
`

const ContentWrapper = styled.div`
  grid-row: 2;
`

export {ContentWrapper}
export default PageWrapper