import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 30px 10px 30px;
`

const Container = ({children}) => {
  return(
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container;