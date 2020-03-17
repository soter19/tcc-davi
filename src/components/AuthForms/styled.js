import styled from 'styled-components'
import { Card, TextField, FormControl, Button } from '@material-ui/core'

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20%;
  flex-grow: 3;
  @media only screen and (max-width: 599.8px) {
    justify-content: flex-start;
    flex-grow: 8;
  }
`

export const StyledTextField = styled(TextField)`
  margin: 1%;
  @media only screen and (max-width: 599.8px) {
    margin: 3% 1%;
  }
`

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 5%;
  height: 50%;
  @media only screen and (max-width: 599.8px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (min-width: 768px) {
    width: 45%;
    padding: 4%;
  }
  @media only screen and (min-width: 992px) {
    width: 40%;
    padding: 3%;
  }
  @media only screen and (min-width: 1200px) {
    width: 35%;
    padding: 2%;
  }
  @media only screen and (min-width: 1200px) and (max-height: 850px) {
    height: 60%;
  }
`

export const StyledButton = styled(Button)`
  margin: 1%;
  @media only screen and (max-width: 599.8px) {
    margin: 2% 1%;
  }
`

export const ButtonIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledLink = styled.span`
  margin: 1%;
  @media only screen and (max-width: 599.8px) {
    margin: 0 1%;
  }
  :hover{
    cursor: pointer;
  }
`

export const InnerFuture4ProfileImg = styled.img`
  padding: 2rem;
  box-sizing: border-box;
  height: 5rem;
  display: none;
  @media only screen and (max-width: 599.8px) {
    display: block;
    height: 50%;
  }
`