import styled from 'styled-components'
import { Card } from '@material-ui/core'
import { theme } from '../../assets/muitheme'

const secondaryColor = theme.palette.secondary

export const ActionsWrapper = styled.div`
  height: 93%;
  width: 100%;
  bottom: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 3fr;
  grid-gap: 1rem;
  padding: 20px;
  
`

export const Action = styled(Card)`
  width: 100%;
  height: 100%;
  background: ${secondaryColor.main};
  &:last-of-type{
    grid-column: 1 / -1;
  }
`