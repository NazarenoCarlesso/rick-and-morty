import { ADD_FAV, DELETE_FAV, FILTER_GENDER, FILTER_RESET, FILTER_SPECIE, FILTER_STATUS, ORDER } from './reducer'

export const addFav = character => ({
    type: ADD_FAV,
    payload: character
})

export const deleteFav = id => ({
    type: DELETE_FAV,
    payload: id
})

export const filterReset = () => ({
    type: FILTER_RESET
})

export const filterGender = gender => ({
    type: FILTER_GENDER,
    payload: gender
})

export const filterSpecie = specie => ({
    type: FILTER_SPECIE,
    payload: specie
})

export const filterStatus = status => ({
    type: FILTER_STATUS,
    payload: status
})

export const orderCards = id => ({
    type: ORDER,
    payload: id
})