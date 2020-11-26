import React, {useContext, useEffect} from 'react'
import AppContext from '../context/appContext'
import AlbumItem from './AlbumItem'

const Albums = () => {
    const appContext = useContext(AppContext);
    const {loading, albums, getAlbums} = appContext;

    useEffect(() => {
        getAlbums();
        //eslint-disable-next-line
    }, []);

    return loading ? <h4>Loading...</h4> :
    <div>
    {albums.map(album => (
        <AlbumItem
            key={album.id}
            album={album} />
    ))}
    </div>
}

export default Albums
