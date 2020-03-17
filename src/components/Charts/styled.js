import styled from 'styled-components'
import { Card } from '@material-ui/core'


export const ChartWrapper = styled.div`
  height: 93%;
  width: 100%;
  bottom: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 3fr 2fr;
  grid-template-areas: 
    "balance price volume ."
    "history history history history"
    "position position position position";
  grid-gap: 1rem;
  padding: 20px;
`

export const Chart = styled(Card)`
  width: 100%;
  height: 100%;
  &:nth-child(1){
    grid-area: balance;
  }
  &:nth-child(2){
    grid-area: price;
  }
  &:nth-child(3){
    grid-area: volume;
  }
  &:nth-child(4){
    grid-area: history;
  }
  &:nth-child(5){
    grid-area: position;
  }
`
