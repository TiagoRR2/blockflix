import styled from "styled-components"

const Container = styled.div`
  margin: 8px;

`

const FieldSet = styled.fieldset`
  border: 1px solid ${(props) => ( props.error ? "red" : (({theme}) => theme.main))};
  border-radius: 4px;
  `

const Input = styled.input`
  background: none;
  color: ${ ({theme}) => theme.text };
  padding: 8px 14px 14px 14px;
  width: 100%;
  `

const Label = styled.legend`
  color: ${(props) => ( props.error ? "red" : (({theme}) => theme.light))};
  margin-left: 1em;
  padding: 0px 5px;
`

const HelperText = styled.p`
  color: ${({theme}) => theme.light};
  font-size: 14px;
  margin: 4px 0 0 8px;
`

const TextField = ({label, helperText, inputType="text", error=false}) => {
  return(
    <Container>
    <FieldSet error={error}>
      <Label error={error}>{label}</Label>
      <Input type={inputType} />
    </FieldSet>
    <HelperText>{helperText}</HelperText>
    </Container>
  )
}

export default TextField