import { } from './actions'

const ADD_FAV = 'ADD_FAV'
const DELETE_FAV = 'DELETE_CHAR'

export { ADD_FAV, DELETE_FAV }

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.concat(payload)
            }
        case DELETE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(c => c.id !== payload)
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer