import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.background || (({theme}) => theme.main)};
  color: ${ props => props.text || (({theme}) => theme.text) };
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: 700;
  letter-spacing: 0.05em;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`

const Button = ({background, type="button", children="Button"}) => {
  return(
    <StyledButton background={background} type={type} >
      {children}
    </StyledButton>
  )
}

export default Button;