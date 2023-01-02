import { } from './actions'

const ADD_FAV = 'ADD_FAV'
const DELETE_FAV = 'DELETE_CHAR'
const FILTER = 'FILTER'
const ORDER = 'ORDER'

export { ADD_FAV, DELETE_FAV, FILTER, ORDER }

const initialState = {
    myFavorites: [],
    allFavorites: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.concat(payload),
                allFavorites: state.allFavorites.concat(payload)
            }
        case DELETE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(c => c.id !== payload)
            }
        case FILTER:
            return {
                ...state,
                myFavorites: state.allFavorites.filter(c => c.gender === payload)
            }
        case ORDER:
            let newArray

            if (payload === 'Ascendente') newArray = [...state.myFavorites].sort((a, b) => a.id - b.id)
            if (payload === 'Descendente') newArray = [...state.myFavorites].sort((a, b) => b.id - a.id)

            return {
                ...state,
                myFavorites: newArray
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer