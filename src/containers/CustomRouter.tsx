import { useLayoutEffect, useState } from 'react'
import { Router, BrowserRouterProps } from 'react-router-dom'
import { BrowserHistory } from 'history'

interface IProps extends BrowserRouterProps {
  history: BrowserHistory
}

export const CustomRouter = ({ history, ...props }: IProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  })

  useLayoutEffect(() => history.listen(setState), [history])

  return <Router {...props} location={state.location} navigationType={state.action} navigator={history} />
}
