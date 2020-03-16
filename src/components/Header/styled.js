import styled from 'styled-components'
import { AppBar, Typography } from '@material-ui/core'
import { theme } from '../../assets/muitheme'

const primaryColor = theme.palette.primary 
const textColor = theme.palette.text


export const StyledAppBar = styled(AppBar)`
  width: 100%;
  position: relative;
  background: ${primaryColor.contrastText};
  height: 7%;
`
// TODO: SOLVE COLOR
export const StyledTypography = styled(Typography)`
  color: black;
  font-weight: 800;
`