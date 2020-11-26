import {
    GET_ALBUMS,
    GET_PHOTOS,
    SET_LOADING
} from './types'

export default (state, action) => {
    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                loading: false,
            }
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                loading: false,
            }
        default:
            return state
    }
}