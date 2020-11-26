import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom';
import AppContext from '../context/appContext'

const AlbumItem = ({album: {userId, id, title}}) => {
    const appContext = useContext(AppContext)
    
    return (
        <li>
            <Link to={'/photos/'+id}>{title}</Link>
        </li>
    )
}

export default AlbumItem
