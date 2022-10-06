import { createTheme, Theme } from '@mui/material/styles'

export const theme = createTheme({}, {
  palette: {
    primary: {
      main: '#1B1B1B',
      dark: '#329A0D',
      light: '#46D414'
    },
    secondary: {
      main: '#EF5350',
      dark: '#FB1E18',
      light: '#4E4E4E'
    },
    info: {
      main: '#DDD',
      dark: '#DDD',
      light: '#333'
    },
    text: {
      primary: '#DDD',
      secondary: '#EF5350',
      disabled: '#DDD'
    },
    background: {
      default: '#333333'
    }
  }
} as Theme)
