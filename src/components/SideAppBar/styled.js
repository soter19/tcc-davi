import styled from 'styled-components'
import { List } from '@material-ui/core'
import { theme } from '../../assets/muitheme'

const primaryColor = theme.palette.primary 

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 7fr;
`

export const Menu = styled.div`
  background: ${primaryColor.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledList = styled(List)`
  padding: 0;
  background: ${primaryColor.main};
`


export const StyledImg = styled.img`
  width: 90%;
  padding: 0.5rem;
`

export const UserInfoSection =  styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`