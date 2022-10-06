import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { theme } from '../data/theme'
import { history } from '../utils/history'
import { CustomRouter } from '../containers/CustomRouter'
import { Loading } from '../containers/Loading'
import { Router } from '../routes/Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomRouter history={history}>
        <SnackbarProvider maxSnack={5} style={{ fontSize: '16px' }}>
          <Loading>
            <Router />
          </Loading>
        </SnackbarProvider>
      </CustomRouter>
    </ThemeProvider>
  )
}

export default App
