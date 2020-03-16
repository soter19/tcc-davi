import React, {Fragment} from "react"
import { 
  StyledAppBar,
  StyledTypography, 
} from './styled'
import { Toolbar } from '@material-ui/core'


export default function Header(props) {
  return(
    <Fragment>
      <StyledAppBar>
        <Toolbar>
          <StyledTypography>
            Dashboard
          </StyledTypography>
        </Toolbar>
      </StyledAppBar>
    </Fragment>
  )
}