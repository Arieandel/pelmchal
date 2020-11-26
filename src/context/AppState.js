import React, { useReducer } from 'react'
import axios from 'axios'
import Reducer from './appReducer'
import appContext from './appContext'
import {
    GET_ALBUM,
    GET_ALBUMS,
    GET_PHOTOS,
    GET_PHOTO,
    CLEAR_,
    SET_LOADING
} from './types'

const AppState = props => {
    const initialState = {
        albums: [],
        album: {},
        photos: [],
        photo: {}
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    //Get Albums
    const getAlbums = async () => {
        setLoading();
        
        const res = await axios.get('https://jsonplaceholder.typicode.com/albums');

        dispatch({
            type: GET_ALBUMS,
            payload: res.data
        });
    }

    //Get Album
    const getAlbum = async (id) => {
        setLoading();

        const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);

        dispatch({
            type: GET_ALBUM,
            payload: res.data
        })
    }

    //Get Photos
    const getPhotos = async (album) => {
        setLoading();
        
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album}`);

        dispatch({
            type: GET_PHOTOS,
            payload: res.data
        });
    }

    //Get Photo
    const getPhoto = async (id) => {
        setLoading();
        
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);

        dispatch({
            type: GET_PHOTO,
            payload: res.data
        });
    }

    //Set Loading
    const setLoading = () => dispatch( { type: SET_LOADING } );

    return <appContext.Provider
        value={{
            albums: state.albums,
            album: state.album,
            photos: state.photos,
            photo: state.photo,
            getAlbums,
            getAlbum,
            getPhoto,
            getPhotos
        }}>
            {props.children}
    </appContext.Provider>
}

export default AppState