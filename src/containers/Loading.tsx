import { Backdrop, CircularProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useGlobalState } from '../hooks/useGlobalState'

const useStyles = makeStyles({
  root: {
    zIndex: 2
  }
})

export const Loading: React.FC = ({ children }) => {
  const [loading] = useGlobalState('loading')
  const classes = useStyles()

  return (
    <>
      {children}
      <Backdrop className={classes.root} open={loading}>
        <CircularProgress />
      </Backdrop>
    </>
  ) 
}
