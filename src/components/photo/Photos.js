import React, {useContext, useEffect} from 'react'
import AppContext from '../../context/appContext'
import PhotoItem from './PhotoItem'

const Photos = ({albumId}) => {
    const appContext = useContext(AppContext);
    const {loading, photos, getPhotos} = appContext;

    useEffect(() => {
        getPhotos(albumId);
        //eslint-disable-next-line
    }, []);

    return loading ? <h4>Loading...</h4> :
    <div>
    {photos.map(photo => (
        <PhotoItem
            key={photo.id}
            photo={photo} />
    ))}
    </div>
}

export default Photos
