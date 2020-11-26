import React, {useContext, useEffect} from 'react'
import AppContext from '../../context/appContext'

const PhotoItem = ({photo: {albumId, id, title, url, thumbnailUrl}}) => {
    const appContext = useContext(AppContext)
    
    return (
        <li className='container'>
            {title}<br/>
            <img 
                src={thumbnailUrl}
                alt=''/>
        </li>
    )
}

export default PhotoItem
