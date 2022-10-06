import React, {useEffect} from 'react'
import './index.scss'
import {Typography} from "@material-ui/core";


const DetailsPreview: React.FC = () => {
    return (
        <div className='details-preview'>
            <Typography className='details-preview__tex-info'>
                Svit touch - це поєднання естетики і функціональності. Ми об'єднали дизайн і <br/>
                технології, щоб зробити ваш будинок ще прекрасніше, управління - простіше, ваше <br/> життя - краще
            </Typography>
        </div>
    )
}

export default DetailsPreview
