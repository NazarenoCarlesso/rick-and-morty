import { ADD_FAV, DELETE_FAV } from './reducer'

const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

const deleteFav = (id) => {
    return {
        type: DELETE_FAV,
        payload: id
    }
}

export { addFav, deleteFav }