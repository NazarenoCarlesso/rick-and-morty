export const ADD_FAV = 'ADD_FAV'
export const DELETE_FAV = 'DELETE_FAV'
export const FILTER_RESET = 'FILTER_RESET'
export const FILTER_GENDER = 'FILTER_GENDER'
export const FILTER_SPECIE = 'FILTER_SPECIE'
export const FILTER_STATUS = 'FILTER_STATUS'
export const ORDER = 'ORDER'

const initialState = {
    myFavorites: [],
    allFavorites: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                allFavorites: state.allFavorites.concat(payload)
            }
        case DELETE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(c => c.id !== payload),
                allFavorites: state.allFavorites.filter(c => c.id !== payload)
            }
        case FILTER_RESET:
            return {
                ...state,
                myFavorites: state.allFavorites
            }
        case FILTER_GENDER:
            if (payload === 'All') return { ...state }
            return {
                ...state,
                myFavorites: state.myFavorites.filter(c => c.gender === payload)
            }
        case FILTER_SPECIE:
            if (payload === 'All') return { ...state }
            return {
                ...state,
                myFavorites: state.myFavorites.filter(c => c.species === payload)
            }
        case FILTER_STATUS:
            if (payload === 'All') return { ...state }
            return {
                ...state,
                myFavorites: state.myFavorites.filter(c => c.status === payload)
            }
        case ORDER:
            let ordered = state.myFavorites
            if (payload === 'Newest') ordered = [...state.myFavorites].reverse()
            if (payload === 'Ascending') ordered = [...state.myFavorites].sort((a, b) => a.id - b.id)
            if (payload === 'Descending') ordered = [...state.myFavorites].sort((a, b) => b.id - a.id)

            return {
                ...state,
                myFavorites: ordered
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer