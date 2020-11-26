import React from 'react'
import { useParams } from 'react-router-dom'
import Photos from '../photo/Photos'

const PhotoList = () => {
    const { id } = useParams();

    return (
        <Photos albumId={id}/>
    )
}

export default PhotoList;