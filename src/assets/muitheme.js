import { createMuiTheme } from "@material-ui/core"

export const theme = {
  overrides: {
    MuiIconButton: {
      colorPrimary: {
        color: 'white'
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'white'
      }
    }
  },
  palette: {
    primary: {
      main: '#002f58',
      light: '#3a5885',
      dark: '#00274A',
      contrastText: '#fff',
    },
    secondary: {
      main: "#ffcc09",
      light: '#ffff53',
      dark: '#c79c00',
      contrastText: "#fff",
    }
  }
}

export default createMuiTheme(theme)