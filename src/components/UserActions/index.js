import React from 'react'
import {
  ActionsWrapper,
  Action 
} from './styled'

const a = [1,2,3,4]


export default function UserActions(props){
  return(
    <ActionsWrapper >
      {a.map(i => {
        return (<Action>
          {i}
        </Action>)
      })}
    </ActionsWrapper>
  )
}
