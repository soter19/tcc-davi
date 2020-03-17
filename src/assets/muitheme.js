import { createMuiTheme } from "@material-ui/core"

export const theme = {
  palette: {
    primary: {
      main: "#F37E2C",
      contrastText: "#000000"
    },
    secondary: {
      main: "#45778C",
      light: "#ABCBD9",
      dark: "#2C4C59",
      contrastText: "#FFFFFF"
    }
  }
}

export const complementaryColors = {
  darkGrey: "#323C40",
  
}

export default createMuiTheme(theme)