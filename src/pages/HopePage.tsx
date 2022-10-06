import React, {useEffect} from 'react'
import DetailsPreview from "../components/home";
import {useGlobalState} from "../hooks/useGlobalState";

export const HomePage: React.FC = () => {
    const [, setLoading] = useGlobalState('loading')

useEffect(() => setLoading(false))
    return (
        <div className='home'>
            <DetailsPreview />
        </div>
    )
}
