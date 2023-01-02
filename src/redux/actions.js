import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from './reducer'

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

const filterCards = (genre) => {
    return {
        type: FILTER,
        payload: genre
    }
}

const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}

export { addFav, deleteFav, filterCards, orderCards }