import styled from 'styled-components'
import { AppBar, Typography } from '@material-ui/core'
import { theme } from '../../assets/muitheme'

const backgroundColor = theme.palette.secondary.contrastText
const textColor = theme.palette.primary.contrastText


export const StyledAppBar = styled(AppBar)`
  width: 100%;
  position: relative;
  background: ${backgroundColor};
  height: 7%;
`
// TODO: SOLVE COLOR
export const StyledTypography = styled(Typography)`
  color: ${textColor};
  font-weight: 800;
`