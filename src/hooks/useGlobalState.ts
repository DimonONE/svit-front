import { createGlobalState } from 'react-hooks-global-state'
import { initialState } from '../data/initialState'

export const { useGlobalState, getGlobalState, setGlobalState } = createGlobalState(initialState)
