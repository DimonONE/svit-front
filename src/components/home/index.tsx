import React, {useEffect} from 'react'
import {useGlobalState} from "../../hooks/useGlobalState";


export const Home: React.FC = () => {
const [, setLoading] = useGlobalState('loading')
useEffect(() => {setLoading(false)}, [])

return (
    <div>
      texts
    </div>
  )
}
